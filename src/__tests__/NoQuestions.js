import React from 'react';
import { render } from 'react-testing-library';

import NoQuestions from '../components/NoQuestions';

it('should render NoQuestions', () => {
  const { getByText } = render(<NoQuestions />);
  expect(
    getByText(
      'There are currently no questions for this chapter :(, but you can change that!'
    )
  ).toBeTruthy();
});
