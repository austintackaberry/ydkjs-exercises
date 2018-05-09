import React, { Component } from "react";
import { Link } from "react-router-dom";

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
    const { question, baseUrl, index } = this.props;
    return (
      <div
        style={{
          border: "1px solid black",
          borderRadius: "3px",
          width: "50%",
          margin: "auto",
          padding: "10px"
        }}
      >
        <h4 style={{ margin: "0" }}>{question.question}</h4>
        <form onSubmit={event => this.handleSubmit(event)}>
          <fieldset
            style={{
              display: "inline-block",
              margin: "0 auto",
              textAlign: "right",
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
                    {answer.answer}
                    <input
                      type="radio"
                      name={index}
                      id={i}
                      value={i}
                      onChange={event => {
                        this.handleChange(event);
                      }}
                    />
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
    );
  }
}

export default Question;
