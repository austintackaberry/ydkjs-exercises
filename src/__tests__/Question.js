import React from 'react';
import { cleanup, fireEvent } from 'react-testing-library';
import { renderWithRouter } from 'test-utils';
import { score } from '../score-context';
import { Question } from '../components/Question';
import rawBooks from '../data';
import { initializeBooks } from '../helpers/helpers';

const books = initializeBooks(rawBooks);
const updateScore = jest.fn();

function generateTestProps({ bkIndex, chIndex, qIndex }) {
  const chapter = books[bkIndex].chapters[chIndex];
  const question = chapter.questions[qIndex];
  return {
    question: question,
    index: qIndex + 1,
    bookId: bkIndex,
    baseUrl: '/test',
    chapterId: chIndex,
    numberOfQuestions: chapter.questions.length,
    score,
    updateScore,
  };
}

const testProps0 = generateTestProps({ bkIndex: 0, chIndex: 0, qIndex: 0 });
const testProps1 = generateTestProps({ bkIndex: 3, chIndex: 1, qIndex: 0 });

it('should render question 1', () => {
  const { getByText, getByTestId } = renderWithRouter(
    <Question {...testProps0} />
  );
  expect(
    getByText(`Question 1 of ${testProps0.numberOfQuestions}`)
  ).toBeTruthy();
  expect(getByTestId('question')).toBeTruthy();
});

it('should render question 2', () => {
  const { getByText, getByTestId, queryAllByTestId } = renderWithRouter(
    <Question {...testProps1} />
  );
  expect(
    getByText(`Question 1 of ${testProps1.numberOfQuestions}`)
  ).toBeTruthy();
  expect(getByTestId('question')).toBeTruthy();
  expect(queryAllByTestId('answer')).toHaveLength(
    testProps1.question.answers.length
  );
  expect(getByText('Submit')).toBeTruthy();
});

it('should set error on submit if answer not selected', () => {
  const { queryByText, getByText } = renderWithRouter(
    <Question {...testProps0} />
  );
  expect(queryByText('Please select an answer')).toBeNull();
  fireEvent.click(getByText('Submit'));
  expect(queryByText('Please select an answer')).toBeTruthy();
});

it('should show "Correct!" when correct answer submitted', () => {
  const { queryByText, getByTestId, getByText } = renderWithRouter(
    <Question {...testProps0} />
  );
  fireEvent.click(
    getByTestId(`answer-${testProps0.question.correctAnswerId}`),
    { button: 0 }
  );
  fireEvent.click(getByText('Submit'));
  expect(queryByText('Please select an answer')).toBeNull();
  expect(queryByText('Correct!')).toBeTruthy();
});

it('should show "Incorrect" when incorrect answer is submitted', () => {
  const correctIndex = testProps0.question.correctAnswerId;
  const incorrectIndex =
    testProps0.question.answers.length % (correctIndex + 1);
  const { queryByText, getByTestId, getByText } = renderWithRouter(
    <Question {...testProps0} />
  );
  fireEvent.click(getByTestId(`answer-${incorrectIndex}`));
  fireEvent.click(getByText('Submit'));
  expect(queryByText('Please select an answer')).toBeNull();
  expect(queryByText('Incorrect! Try Again!')).toBeTruthy();
});

it("should render 'Show Explanation' button on submit", () => {
  const correctIndex = testProps0.question.correctAnswerId;
  const incorrectIndex =
    testProps0.question.answers.length % (correctIndex + 1);
  const { queryByText, getByTestId, getByText } = renderWithRouter(
    <Question {...testProps0} />
  );
  fireEvent.click(getByTestId(`answer-${incorrectIndex}`));
  fireEvent.click(getByText('Submit'));
  expect(queryByText('Please select an answer')).toBeNull();
  expect(queryByText('Show Explanation')).toBeTruthy();
});

it("should toggle explanation when 'Show Explanation' and 'Hide Explanation' is clicked", () => {
  const correctIndex = testProps0.question.correctAnswerId;
  const incorrectIndex =
    testProps0.question.answers.length % (correctIndex + 1);
  const { queryByText, getByTestId, getByText } = renderWithRouter(
    <Question {...testProps0} />
  );
  fireEvent.click(getByTestId(`answer-${incorrectIndex}`));
  fireEvent.click(getByText('Submit'));
  fireEvent.click(getByText('Show Explanation'));
  getByTestId('explanation');
  expect(queryByText('Hide Explanation')).toBeTruthy();
  fireEvent.click(getByText('Hide Explanation'));
  expect(queryByText('explanation')).toBeNull();
});

afterEach(cleanup);
