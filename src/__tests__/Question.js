import React from 'react';
import { shallow } from 'enzyme';
import { score } from '../score-context';
import { Question } from '../components/Question';
import books from '../data';

const [upGoingCh1Q1] = books[0].chapters[0].questions;
const [typesGrammarCh2Q1] = books[3].chapters[1].questions;
const baseUrl = '/up-going/ch1';
const index = 1;
const bookId = 0;
const chapterId = 0;
const numberOfQuestions = 6;
const updateScore = jest.fn();

const generateTestProps = question => {
  return {
    question,
    baseUrl,
    index,
    bookId,
    chapterId,
    numberOfQuestions,
    score,
    updateScore,
  };
};

it('should render question 1', () => {
  const comp = shallow(<Question {...generateTestProps(upGoingCh1Q1)} />);
  expect(
    comp
      .find('Header3')
      .children()
      .text()
  ).toBe('Question 1 of 6');
  expect(
    comp
      .find('ReactMarkdown')
      .first()
      .props().source
  ).toBe(upGoingCh1Q1.question);
  expect(comp.find('label').length).toBe(4);
  expect(comp.find('input[type="radio"]').length).toBe(4);
  expect(
    comp
      .find('ReactMarkdown')
      .at(1)
      .props().source
  ).toBe('One');
  expect(
    comp
      .find('ReactMarkdown')
      .at(2)
      .props().source
  ).toBe('Two');
  expect(
    comp
      .find('ReactMarkdown')
      .at(3)
      .props().source
  ).toBe('Three');
  expect(
    comp
      .find('ReactMarkdown')
      .at(4)
      .props().source
  ).toBe('Four');
  expect(comp.find('SubmitButton').length).toBe(1);
});

it('should render question 2', () => {
  const comp = shallow(<Question {...generateTestProps(typesGrammarCh2Q1)} />);
  expect(
    comp
      .find('Header3')
      .children()
      .text()
  ).toBe('Question 1 of 6');
  expect(
    comp
      .find('ReactMarkdown')
      .first()
      .props().source
  ).toBe(typesGrammarCh2Q1.question);
  expect(comp.find('label').length).toBe(2);
  expect(comp.find('input[type="radio"]').length).toBe(2);
  expect(
    comp
      .find('ReactMarkdown')
      .at(1)
      .props().source
  ).toBe('True');
  expect(comp.find('SubmitButton').length).toBe(1);
});
it('should set answer state', () => {
  const comp = shallow(<Question {...generateTestProps(upGoingCh1Q1)} />);
  expect(comp.instance().state.userAnswerId).toBeNull();
  comp.instance().handleAnswerChange({ target: { value: 2 } });
  expect(comp.instance().state.userAnswerId).toBe(2);
});

it('should set error on submit if answer not selected', () => {
  const comp = shallow(<Question {...generateTestProps(upGoingCh1Q1)} />);
  expect(comp.instance().state.error).toBe(false);
  comp.instance().handleSubmit({
    preventDefault: () => {},
  });
  expect(comp.instance().state.error).toBe(true);
});

it('should set correct answer to green on submit', () => {
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
        .find('span')
        .at(3)
        .html()
    ).toMatch(/color:green/);
  });
});

it('should set incorrect answer to red', () => {
  const comp = shallow(<Question {...generateTestProps(upGoingCh1Q1)} />);
  comp.instance().handleAnswerChange({ target: { value: 2 } });
  comp.instance().handleSubmit({ preventDefault: () => {} });
  expect(comp.instance().state.error).toBe(false);
  expect(comp.instance().state.userAnswerId).toBe(2);
  expect(comp.instance().state.answerSubmitted).toBe(true);
  return Promise.resolve().then(() => {
    comp.update();
    expect(
      comp
        .find('span')
        .at(2)
        .html()
    ).toMatch(/color:red/);
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
    expect(comp.find('button.explanationButton').length).toBe(1);
    expect(comp.find('div.explanation').length).toBe(0);
  });
});

it('should toggle explanations on clicking explanation button', () => {
  const comp = shallow(<Question {...generateTestProps(upGoingCh1Q1)} />);
  comp.instance().handleAnswerChange({ target: { value: 3 } });
  comp.instance().handleSubmit({ preventDefault: () => {} });
  expect(comp.instance().state.error).toBe(false);
  expect(comp.instance().state.userAnswerId).toBe(3);
  expect(comp.instance().state.answerSubmitted).toBe(true);
  return Promise.resolve()
    .then(() => {
      comp.update();
      expect(comp.find('button.explanationButton').length).toBe(1);
    })
    .then(() => {
      comp.instance().toggleExplanationRequest();
    })
    .then(() => {
      comp.update();
      expect(comp.find('button.explanationButton').length).toBe(1);
      expect(comp.find('div.explanation').length).toBe(1);
    })
    .then(() => {
      comp.instance().toggleExplanationRequest();
    })
    .then(() => {
      comp.update();
      expect(comp.find('button.explanationButton').length).toBe(1);
      expect(comp.find('div.explanation').length).toBe(0);
    });
});
