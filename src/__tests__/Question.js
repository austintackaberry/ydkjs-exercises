import React from "react";
import { shallow } from "enzyme";
import { score } from "../score-context";

import Question from "../components/Question";
import books from "../data";

const upGoingCh1Q1 = books[0].chapters[0].questions[0];
const upGoingCh1Q2 = books[0].chapters[0].questions[1];
const baseUrl = "/up-going/ch1";
const index = 1;
const numberOfQuestions = 6;
const updateScore = jest.fn();

const generateTestProps = question => {
  return {
    question,
    baseUrl,
    index,
    numberOfQuestions,
    score,
    updateScore
  };
};

it("should render question 1", () => {
  const comp = shallow(<Question {...generateTestProps(upGoingCh1Q1)} />);

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

it("should render question 2", () => {
  const comp = shallow(<Question {...generateTestProps(upGoingCh1Q2)} />);

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
  ).toBe("What is a computer program (source code / code)?");
  expect(comp.find("label").length).toBe(4);
  expect(comp.find('input[type="radio"]').length).toBe(4);
  expect(comp.find("span").length).toBe(4);
  expect(
    comp
      .find("span")
      .at(0)
      .text()
  ).toBe(
    "A set of special instructions to tell the computer what tasks to perform."
  );
  expect(comp.find("button").length).toBe(1);
  expect(comp.find("NavigationButton").length).toBe(2);
});
it("should set answer state", () => {
  const comp = shallow(<Question {...generateTestProps(upGoingCh1Q1)} />);
  expect(comp.instance().state.userAnswerId).toBeNull();
  comp.instance().handleAnswerChange({ target: { value: 2 } });
  expect(comp.instance().state.userAnswerId).toBe(2);
});

it("should set error on submit if answer not selected", () => {
  const comp = shallow(<Question {...generateTestProps(upGoingCh1Q1)} />);
  expect(comp.instance().state.error).toBe(false);
  comp.instance().handleSubmit({
    preventDefault: () => {}
  });
  expect(comp.instance().state.error).toBe(true);
});

it("should set correct answer to green on submit", () => {
  const comp = shallow(<Question {...generateTestProps(upGoingCh1Q1)} />);
  comp.instance().handleAnswerChange({ target: { value: 3 } });
  comp.instance().handleSubmit({ preventDefault: () => {} });
  expect(comp.instance().state.error).toBe(false);
  expect(comp.instance().state.userAnswerId).toBe(3);
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
  const comp = shallow(<Question {...generateTestProps(upGoingCh1Q1)} />);
  comp.instance().handleAnswerChange({ target: { value: 3 } });
  comp.instance().handleSubmit({ preventDefault: () => {} });
  expect(comp.instance().state.error).toBe(false);
  expect(comp.instance().state.userAnswerId).toBe(3);
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

it("should render 'Show Explanation' button on submit", () => {
  const comp = shallow(<Question {...generateTestProps(upGoingCh1Q1)} />);
  comp.instance().handleAnswerChange({ target: { value: 3 } });
  comp.instance().handleSubmit({ preventDefault: () => {} });
  expect(comp.instance().state.error).toBe(false);
  expect(comp.instance().state.userAnswerId).toBe(3);
  expect(comp.instance().state.answerSubmitted).toBe(true);
  expect(comp.instance().state.explanationRequested).toBe(false);
  return Promise.resolve().then(() => {
    comp.update();
    expect(comp.find("button.explanationButton").length).toBe(1);
    expect(comp.find("div.explanation").length).toBe(0);
  });
});

it("should toggle explanations on clicking explanation button", () => {
  const comp = shallow(<Question {...generateTestProps(upGoingCh1Q1)} />);
  comp.instance().handleAnswerChange({ target: { value: 3 } });
  comp.instance().handleSubmit({ preventDefault: () => {} });
  expect(comp.instance().state.error).toBe(false);
  expect(comp.instance().state.userAnswerId).toBe(3);
  expect(comp.instance().state.answerSubmitted).toBe(true);
  return Promise.resolve().then(() => {
    comp.update();
    expect(comp.find("button.explanationButton").length).toBe(1);
  }).then(() => {
    comp.instance().toggleExplanationRequest();
  }).then(() => {
    comp.update();
    expect(comp.find("button.explanationButton").length).toBe(1);
    expect(comp.find("div.explanation").length).toBe(1);
  }).then(() => {
    comp.instance().toggleExplanationRequest();
  }).then(() => {
    comp.update();
    expect(comp.find("button.explanationButton").length).toBe(1);
    expect(comp.find("div.explanation").length).toBe(0);
  })
});
