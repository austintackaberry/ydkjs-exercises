import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';

const NavigationButton = props =>
  withRouter(({ history }) => (
    <MuiThemeProvider>
      <FlatButton
        backgroundColor="white"
        hoverColor="#CCC"
        label={props.label}
        disabled={!props.enabled}
        onClick={() => {
          history.push(props.destination);
        }}
      />
    </MuiThemeProvider>
  ))(props);

class Question extends Component {
  constructor() {
    super();
    this.state = {
      userAnswerId: null,
      answerSubmitted: null,
      error: false,
      correctAnswer: null,
      explanationRequested: false,
    };
  }

  calcNewScore(isCorrect) {
    const { updateScore, score, bookId, chapterId, index } = this.props;
    const questionIndex = index - 1;

    /* check if current question was already answered correctly */
    const alreadyAnswered =
      score.books[bookId].chapters[chapterId].questions[questionIndex].answered;

    let newScore = score;
    const newBookScore = score.books.map((book, index) => {
      if (index === bookId) {
        return {
          title: book.title,
          chapters: book.chapters.map((chapter, index) => {
            if (index === chapterId) {
              return {
                title: chapter.title,
                questions: chapter.questions.map((question, index) => {
                  if (questionIndex === index) {
                    return {
                      answered: isCorrect || question.answered,
                    };
                  }
                  return { answered: question.answered };
                }),
              };
            }
            return chapter;
          }),
          current:
            isCorrect && !alreadyAnswered ? book.current + 1 : book.current,
          possible: book.possible,
        };
      }
      return book;
    });

    /* update current book score */
    newScore.books = newBookScore;

    /* update total score */
    newScore.current =
      isCorrect && !alreadyAnswered ? newScore.current + 1 : newScore.current;
    updateScore(newScore);
  }

  handleSubmit(event) {
    let currentAnswer = this.props.question.answers[this.state.userAnswerId];
    if (this.state.userAnswerId === null) {
      this.setState({
        error: true,
      });
    } else {
      this.setState(
        {
          answerSubmitted: true,
          error: false,
          correctAnswer:
            this.props.question.correctAnswerId === currentAnswer.id,
        },
        () => {
          this.calcNewScore(
            this.props.question.correctAnswerId === currentAnswer.id
          );
        }
      );
    }
    event.preventDefault();
  }

  handleAnswerChange(event) {
    this.setState({
      userAnswerId: event.target.value,
      answerSubmitted: null,
      correctAnswer: null,
    });
  }

  toggleExplanationRequest() {
    this.setState({
      explanationRequested: !this.state.explanationRequested,
    });
  }

  render() {
    const { answerSubmitted, userAnswerId, explanationRequested } = this.state;
    const { question, baseUrl, index, numberOfQuestions } = this.props;
    const navigation = {
      previous: {
        enabled: index > 1,
        url: baseUrl + '/q' + (index - 1),
      },
      next: {
        enabled: index < numberOfQuestions,
        url: baseUrl + '/q' + (index + 1),
      },
    };

    let message;
    if (this.state.error) {
      message = 'Please select an answer';
    } else if (this.state.correctAnswer) {
      message = 'Correct!';
    } else if (this.state.correctAnswer === false) {
      message = 'Incorrect! Try Again!';
    }

    return (
      <React.Fragment>
        <div
          style={{
            border: '2px solid black',
            borderRadius: '3px',
            width: '40%',
            margin: 'auto',
            position: 'relative',
            height: '18em',
            padding: '30px 20px',
          }}
        >
          <h3
            style={{ margin: '10px' }}
          >{`Question ${index} of ${numberOfQuestions}`}</h3>
          <h4 style={{ margin: '0' }}>{question.question}</h4>
          <form onSubmit={event => this.handleSubmit(event)}>
            <fieldset
              style={{
                display: 'inline-block',
                margin: '0 auto',
                textAlign: 'left',
                border: 'none',
              }}
            >
              {question.answers.map((answer, i) => {
                let answerColor;
                if (answerSubmitted) {
                  if (question.correctAnswerId === answer.id) {
                    answerColor = { color: 'green' };
                  }
                  if (
                    userAnswerId == answer.id &&
                    !(question.correctAnswerId === answer.id)
                  ) {
                    answerColor = { color: 'red' };
                  }
                }
                return (
                  <div key={answer.id}>
                    <label
                      htmlFor={i}
                      style={{ display: 'block', margin: '5px' }}
                    >
                      <input
                        type="radio"
                        name={index}
                        id={i}
                        value={answer.id}
                        onChange={event => {
                          this.handleAnswerChange(event);
                        }}
                      />
                      <span style={answerColor}>{answer.text}</span>
                    </label>
                  </div>
                );
              })}
            </fieldset>
            <button
              type="submit"
              style={{ display: 'block', margin: '0 auto' }}
            >
              Submit
            </button>
            {answerSubmitted &&
              explanationRequested && (
                <div>
                  <button
                    className="explanationButton"
                    onClick={event => this.toggleExplanationRequest()}
                  >
                    Hide Explanation
                  </button>
                  <div className="explanation">{question.explanation}</div>
                </div>
              )}

            {answerSubmitted &&
              !explanationRequested && (
                <button
                  className="explanationButton"
                  onClick={event => this.toggleExplanationRequest()}
                >
                  Show Explanation
                </button>
              )}
          </form>
          <div
            style={{
              position: 'absolute',
              left: '0',
              right: '0',
              bottom: '2px',
              fontSize: '18px',
              fontWeight: '700',
            }}
          >
            {message}
          </div>
        </div>
        <section
          className="navigation"
          style={{
            display: 'flex',
            width: '40%',
            margin: '1em auto',
            justifyContent: 'space-around',
          }}
        >
          <NavigationButton
            label="Previous"
            destination={navigation.previous.url}
            enabled={navigation.previous.enabled}
          />
          <NavigationButton
            label="Next"
            destination={navigation.next.url}
            enabled={navigation.next.enabled}
          />
        </section>
      </React.Fragment>
    );
  }
}

Question.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  bookId: PropTypes.number.isRequired,
  chapterId: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  numberOfQuestions: PropTypes.number.isRequired,
  question: PropTypes.object.isRequired,
  score: PropTypes.object.isRequired,
  updateScore: PropTypes.func.isRequired,
};

export default Question;
