import React from 'react';
import { renderWithRouter } from 'test-utils';
import { score } from '../score-context';
import Sidebar from '../components/Sidebar';
import rawBooks from '../data';
import { initializeBooks } from '../helpers/helpers';
import { toHaveStyle } from 'jest-dom';

expect.extend({ toHaveStyle });

const books = initializeBooks(rawBooks);

it('should render the sidebar', () => {
  const { getByText, getByTestId } = renderWithRouter(
    <Sidebar
      data-name="Sidebar"
      books={books}
      isNarrowScreen={false}
      score={score}
      shouldShow={true}
      updateScore={() => {}}
      onMenuClick={() => {}}
    />
  );
  expect(getByText('Progress')).toBeTruthy();
  expect(getByText(/Up & Going/)).toBeTruthy();
  // Children of the first book should be hidden
  expect(getByTestId('b0-children')).toHaveStyle('max-height: 1px');
});
