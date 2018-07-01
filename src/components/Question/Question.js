import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  Fieldset,
  FlatButton,
  Header3,
  Header4,
  MessageWrapper,
  Section,
  SubmitButton,
  Wrapper,
} from './styled';

const NavigationButton = props =>
  withRouter(({ history }) => (
    <FlatButton
      disabled={!props.enabled}
      onClick={() => {
        history.push(props.destination);
      }}
    >
      {props.label}
    </FlatButton>
  ))(props);

class Question extends Component {
  static propTypes = {
    baseUrl: PropTypes.string.isRequired,
    bookId: PropTypes.number.isRequired,
    chapterId: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    numberOfQuestions: PropTypes.number.isRequired,
    question: PropTypes.object.isRequired,
    score: PropTypes.object.isRequired,
    updateScore: PropTypes.func.isRequired,
  };
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

    /* eslint-disable no-unused-vars */
    const CORRECT = 'CORRECT'
    const INCORRECT = 'INCORRECT'
    const UNANSWERED = 'UNANSWERED'
    /* eslint-enable no-unused-vars */

    /* check if current question was already answered correctly */
    const prevStatus = score.books[bookId].chapters[chapterId].questions[questionIndex].status;

    /* calculate the numeric score difference 
     * based on current score state */
    let scoreDiff = {}
    switch( prevStatus ) {
      case CORRECT:
        scoreDiff = { correct: 0, incorrect: 0, };
        break;
      case INCORRECT:
        scoreDiff = {
          correct: isCorrect ? 1 : 0,
          incorrect: isCorrect ? -1 : 0,
        };
        break;
      case UNANSWERED:
        scoreDiff = {
          correct: isCorrect ? 1 : 0,
          incorrect: isCorrect ? 0 : 1,
        };
        break;
      default:
        break;
    }

    const newScore = {
      ...score, 
      books: score.books.map((book, index) => {
        if (index === bookId) {
          return {
            ...book,
            chapters: book.chapters.map((chapter, index) => {
              if (index === chapterId) {
                return {
                  ...chapter,
                  questions: chapter.questions.map((question, index) => {
                    if (questionIndex === index) {
                      return {
                        status: isCorrect ? CORRECT : INCORRECT
                      };
                    }
                    return question
                  })
                }
              }
              return chapter
            })
          }
        }
        return book
      }),
    }

    /* update total score */
    newScore.correct = newScore.correct + scoreDiff.correct;
    newScore.incorrect = newScore.incorrect + scoreDiff.incorrect;
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
        <Wrapper>
          <Header3>{`Question ${index} of ${numberOfQuestions}`}</Header3>
          <Header4>{question.question}</Header4>
          <form onSubmit={event => this.handleSubmit(event)}>
            <Fieldset>
              {question.answers.map((answer, i) => {
                let answerColor;
                if (answerSubmitted) {
                  if (
                    userAnswerId == answer.id &&
                    question.correctAnswerId === answer.id
                  ) {
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
            </Fieldset>
            <SubmitButton type="submit">Submit</SubmitButton>
            {answerSubmitted &&
              explanationRequested && (
                <div>
                  <button
                    className="explanationButton"
                    onClick={event => this.toggleExplanationRequest()}
                  >
                    Hide Explanation
                  </button>
                  <div className="explanation">
                    {question.explanation}
                    <br />
                    <a
                      href={question.moreInfoUrl}
                      target="_blank"
                      style={{ textDecoration: 'underline', color: 'blue' }}
                    >
                      Github link to the chapter section
                    </a>
                  </div>
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
          <MessageWrapper>{message}</MessageWrapper>
        </Wrapper>
        {/* className="navigation" */}
        <Section>
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
        </Section>
      </React.Fragment>
    );
  }
}

export default Question;
