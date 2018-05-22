import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import FlatButton from "material-ui/FlatButton";

const NavigationButton = (props) => withRouter(({ history }) => (
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
    this.state = { userAnswerIndex: null };
  }

  handleSubmit(event) {
    const { question } = this.props;
    const { userAnswerIndex } = this.state;
    if (question.answers[userAnswerIndex].isCorrect) {
      console.log("yay correct");
    } else {
      console.log("boo you bad");
    }
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ userAnswerIndex: event.target.value });
  }

  render() {
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
            padding: "20px"
          }}
        >
          <h3 style={{ margin: "10px" }}>{`Question ${ index } of ${ numberOfQuestions }`}</h3>
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
                        this.handleChange(event);
                      }}
                      />
                      {answer.answer}
                    </label>
                  </div>
                );
              })}
            </fieldset>
            <button type="submit" style={{ display: "block", margin: "0 auto" }}>
              Submit
            </button>
          </form>

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
