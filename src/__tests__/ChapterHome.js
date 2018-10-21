import React from 'react';
import { renderWithRouter } from 'test-utils';
import { Route } from 'react-router-dom';

import ChapterHome from '../components/ChapterHome';

const props = {
  currentUrl: '/testroute',
};

it('should redirect to q1', () => {
  const { getByTestId } = renderWithRouter(
    <div>
      <Route
        path={`${props.currentUrl}/q1`}
        render={() => <div data-testid="q1-redirect" />}
      />
      <Route
        exact
        path={props.currentUrl}
        render={() => {
          return <ChapterHome {...props} />;
        }}
      />
    </div>,
    { route: props.currentUrl }
  );
  expect(getByTestId('q1-redirect')).toBeTruthy();
});
