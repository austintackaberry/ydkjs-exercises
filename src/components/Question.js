import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import FlatButton from "material-ui/FlatButton";

const NavigationButton = props =>
  withRouter(({ history }) => (
    <MuiThemeProvider>
      <FlatButton
        backgroundColor="white"
        hoverColor="#CCC"
        label={props.label}
        disabled={!props.enabled}
        onClick={() => history.push(props.destination)}
      />
    </MuiThemeProvider>
  ))(props);

class Question extends Component {
  constructor() {
    super();
    this.state = {
      userAnswerIndex: null,
      answerSubmitted: null,
      error: false,
      correctAnswer: null
    };
  }

  calcNewScore(isCorrect) {
    const { updateScore, score, bookId, chapterId, index } = this.props;
    const questionIndex = index - 1;
    const newScore = score.map((book, index) => {
      if (index === bookId) {
        return {
          title: book.title,
          chapters: book.chapters.map((chapter, index) => {
            if (index === chapterId) {
              return {
                title: chapter.title,
                questions: chapter.questions.map((question, index) => {
                  if (questionIndex === index) {
                    return { answered: true, correct: isCorrect };
                  }
                  return { answered: false };
                })
              };
            }
            return chapter;
          })
        };
      }
      return book;
    });
    updateScore(newScore);
  }

  handleSubmit(event) {
    let currentAnswer = this.props.question.answers[this.state.userAnswerIndex];
    if (this.state.userAnswerIndex === null) {
      this.setState({
        error: true
      });
    } else {
      this.setState({
        answerSubmitted: true,
        error: false,
        correctAnswer: this.props.question.correctAnswerId === currentAnswer.id
      });
      this.calcNewScore(
        this.props.question.correctAnswerId === currentAnswer.id
      );
    }
    event.preventDefault();
  }

  handleAnswerChange(event) {
    this.setState({
      userAnswerIndex: event.target.value,
      answerSubmitted: null
    });
  }

  render() {
    const { answerSubmitted, userAnswerIndex } = this.state;
    const { question, baseUrl, index, numberOfQuestions } = this.props;
    const navigation = {
      previous: {
        enabled: index > 1,
        url: baseUrl + "/q" + (index - 1)
      },
      next: {
        enabled: index < numberOfQuestions,
        url: baseUrl + "/q" + (index + 1)
      }
    };
    let message;

    if (this.state.error) {
      message = "Please select an answer";
    } else if (this.state.correctAnswer) {
      message = "Correct!";
    } else if (this.state.correctAnswer === false) {
      message = "Incorrect";
    }

    return (
      <React.Fragment>
        <div
          style={{
            border: "2px solid black",
            borderRadius: "3px",
            width: "40%",
            margin: "auto",
            position: "relative",
            height: "18em",
            padding: "30px 20px"
          }}
        >
          <h3
            style={{ margin: "10px" }}
          >{`Question ${index} of ${numberOfQuestions}`}</h3>
          <h4 style={{ margin: "0" }}>{question.question}</h4>
          <form onSubmit={event => this.handleSubmit(event)}>
            <fieldset
              style={{
                display: "inline-block",
                margin: "0 auto",
                textAlign: "left",
                border: "none"
              }}
            >
              {question.answers.map((answer, i) => {
                let answerColor;

                if (answerSubmitted) {
                  if (question.correctAnswerId === answer.id) {
                    answerColor = { color: "green" };
                  }
                  if (
                    userAnswerIndex == answer.id &&
                    !(question.correctAnswerId === answer.id)
                  ) {
                    answerColor = { color: "red" };
                  }
                }

                return (
                  <div key={answer.id}>
                    <label
                      htmlFor={i}
                      style={{ display: "block", margin: "5px" }}
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
              style={{ display: "block", margin: "0 auto" }}
            >
              Submit
            </button>
          </form>
          <div
            style={{
              position: "absolute",
              left: "0",
              right: "0",
              bottom: "2px",
              fontSize: "18px",
              fontWeight: "700"
            }}
          >
            {message}
          </div>
        </div>
        <section
          className="navigation"
          style={{
            display: "flex",
            width: "40%",
            margin: "1em auto",
            justifyContent: "space-around"
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

export default Question;
