import React from 'react';
import { renderWithRouter } from 'test-utils';

import DrawerMenu from '../components/DrawerMenu';

const props = {
  children: () => {},
  id: 'id',
  to: '/url',
  title: 'fake-title',
  nest: 1,
};

it('should render without breaking', () => {
  const { getByText, getByTestId } = renderWithRouter(
    <DrawerMenu {...props} />
  );
  const el = getByText(props.title);
  const url = el.href.split('/');
  const pathname = `/${url[url.length - 1]}`;
  expect(pathname).toBe(props.to);
  expect(getByTestId(`${props.id}-children`)).toBeTruthy();
});
