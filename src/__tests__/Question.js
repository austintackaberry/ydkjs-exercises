import React from "react";
import { shallow } from "enzyme";
import { score } from "../score-context";

import Question from "../components/Question";

const question = {
  question: "How many expressions are in the following statement: a = b * 2; ?",
  orderedById: true,
  answers: [
    { text: "one", id: 0 },
    { text: "two", id: 1 },
    { text: "three", id: 2 },
    { text: "four", id: 3 }
  ],
  correctAnswerId: 3,
  explanation:
    "explain why other answers are wrong and why this answer is the best answer"
};
const baseUrl = "/up-going/ch1";
const index = 1;
const numberOfQuestions = 6;
const updateScore = jest.fn();

const test_props = {
  question,
  baseUrl,
  index,
  numberOfQuestions,
  score,
  updateScore
};

it("should render question", () => {
  const comp = shallow(<Question {...test_props} />);

  expect(
    comp
      .find("h3")
      .at(0)
      .text()
  ).toBe("Question 1 of 6");
  expect(
    comp
      .find("h4")
      .at(0)
      .text()
  ).toBe("How many expressions are in the following statement: a = b * 2; ?");
  expect(comp.find("label").length).toBe(4);
  expect(comp.find('input[type="radio"]').length).toBe(4);
  expect(comp.find("span").length).toBe(4);
  expect(
    comp
      .find("span")
      .at(0)
      .text()
  ).toBe("one");
  expect(
    comp
      .find("span")
      .at(1)
      .text()
  ).toBe("two");
  expect(
    comp
      .find("span")
      .at(2)
      .text()
  ).toBe("three");
  expect(
    comp
      .find("span")
      .at(3)
      .text()
  ).toBe("four");
  expect(comp.find("button").length).toBe(1);
  expect(comp.find("NavigationButton").length).toBe(2);
});

it("should set answer state", () => {
  const comp = shallow(<Question {...test_props} />);
  expect(comp.instance().state.userAnswerIndex).toBeNull();
  comp.instance().handleAnswerChange({ target: { value: 2 } });
  expect(comp.instance().state.userAnswerIndex).toBe(2);
});

it("should set error on submit if answer not selected", () => {
  const comp = shallow(<Question {...test_props} />);
  expect(comp.instance().state.error).toBe(false);
  comp.instance().handleSubmit({
    preventDefault: () => {}
  });
  expect(comp.instance().state.error).toBe(true);
});

it("should set correct answer to green on submit", () => {
  const comp = shallow(<Question {...test_props} />);
  comp.instance().handleAnswerChange({ target: { value: 3 } });
  comp.instance().handleSubmit({ preventDefault: () => {} });
  expect(comp.instance().state.error).toBe(false);
  expect(comp.instance().state.userAnswerIndex).toBe(3);
  expect(comp.instance().props.question.correctAnswerId).toBe(3);
  return Promise.resolve().then(() => {
    comp.update();
    expect(
      comp
        .find("span")
        .at(3)
        .html()
    ).toMatch(/color:green/);
  });
});

it("should set incorrect answer to red and correct answer to green on submit", () => {
  const comp = shallow(<Question {...test_props} />);
  comp.instance().handleAnswerChange({ target: { value: 3 } });
  comp.instance().handleSubmit({ preventDefault: () => {} });
  expect(comp.instance().state.error).toBe(false);
  expect(comp.instance().state.userAnswerIndex).toBe(3);
  expect(comp.instance().state.answerSubmitted).toBe(true);
  return Promise.resolve().then(() => {
    comp.update();
    expect(
      comp
        .find("span")
        .at(3)
        .html()
    ).toMatch(/color:green/);
  });
});
