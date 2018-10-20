import React from 'react';
import { renderWithRouter } from 'test-utils';

import NoMatch from '../components/NoMatch';

it('should render NoMatch', () => {
  const { getByText } = renderWithRouter(<NoMatch />);
  expect(getByText("Looks like this page doesn't exist")).toBeTruthy();
});
