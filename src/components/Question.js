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
    this.state = { userAnswerIndex: null, answerSubmitted: null, error: false };
  }

  handleSubmit(event) {
    if (this.state.userAnswerIndex === null) {
      this.setState({
        error: true
      });
    } else {
      this.setState({
        answerSubmitted: true,
        error: false
      });
    }
    event.preventDefault();
  }

  handleAnswerChange(event) {
    this.setState({ userAnswerIndex: event.target.value });
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

    return (
      <React.Fragment>
        <div
          style={{
            border: "2px solid black",
            borderRadius: "3px",
            width: "40%",
            margin: "auto",
            padding: "20px",
            position: "relative"
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
                  if (answer.isCorrect) {
                    answerColor = { color: "green" };
                  }
                  if (userAnswerIndex == i && !answer.isCorrect) {
                    answerColor = { color: "red" };
                  }
                }

                return (
                  <div>
                    <label
                      htmlFor={i}
                      style={{ display: "block", margin: "5px" }}
                    >
                      <input
                        type="radio"
                        name={index}
                        id={i}
                        value={i}
                        onChange={event => {
                          this.handleAnswerChange(event);
                        }}
                      />
                      <span style={answerColor}>{answer.answer}</span>
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
          {this.state.error && (
            <div
              style={{
                position: "absolute",
                left: "0",
                right: "0",
                bottom: "2px",
                fontSize: "14px"
              }}
            >
              *Please Select an Answer*
            </div>
          )}
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
