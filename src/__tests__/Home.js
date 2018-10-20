import React from 'react';
import { renderWithRouter } from 'test-utils';

import Home from '../components/Home';

const books = [
  {
    url: '/up-going',
    title: 'Up & Going',
    id: 'upGoing',
    chapters: null,
  },
  {
    url: '/scope-closures',
    title: 'Scope & Closures',
    id: 'scopeClosures',
    chapters: null,
  },
];

it('should render Home view', () => {
  const { getByText, getByTestId } = renderWithRouter(<Home books={books} />);
  expect(getByText('Scope & Closures')).toBeTruthy();
  expect(getByText('Up & Going')).toBeTruthy();
  const url = getByTestId('upGoing').href.split('/');
  const pathname = `/${url[url.length - 1]}`;
  expect(pathname).toBe('/up-going');
});
