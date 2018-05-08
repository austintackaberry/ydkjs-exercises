import React, { Component } from "react";
import { Link } from "react-router-dom";

class Question extends Component {
  render() {
    const { question, baseUrl, index } = this.props;
    return (
      <div>
        <h4>{question.question}</h4>
        <fieldset>
          {question.answers.map((answer, i) => {
            return (
              <label htmlFor={i}>
                {answer.answer}
                <input type="radio" name="index" id={i} />
              </label>
            );
          })}
        </fieldset>
      </div>
    );
  }
}

export default Question;
