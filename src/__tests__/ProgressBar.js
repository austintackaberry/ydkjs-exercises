import React from 'react';
import { render } from 'react-testing-library';
import ProgressBar from '../components/ProgressBar';

const dummyScore = {
  correct: 33,
  incorrect: 33,
  possible: 100,
};

it('should render the progress bar', () => {
  const { getByTestId } = render(<ProgressBar score={dummyScore} />);
  expect(getByTestId('correct')).toBeTruthy();
  expect(getByTestId('incorrect')).toBeTruthy();
});
