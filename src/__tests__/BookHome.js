import React from 'react';
import { shallow } from 'enzyme';

import BookHome from '../components/BookHome';

const UpGoingChapters = [
  {
    title: 'Chapter 1: Into Programming',
    url: '/ch1',
  },
  {
    title: 'Chapter 2: Into JavaScript',
    url: '/ch2',
  },
];

const book = {
  url: '/up-going',
  title: 'Up & Going',
  id: 'upGoing',
  chapters: UpGoingChapters,
};

it('should render the book chapters', () => {
  const comp = shallow(<BookHome book={book} />);
  expect(comp.find('List').length).toBe(1);
  expect(comp.find('Link').length).toBe(2);
  expect(
    comp
      .find('Link')
      .at(0)
      .prop('to')
  ).toBe('/up-going/ch1');
  expect(
    comp
      .find('Link')
      .at(0)
      .prop('to')
  ).toBe('/up-going/ch1');
  expect(comp.find('ListItem').length).toBe(2);
  expect(
    comp
      .find('ListItem')
      .at(0)
      .children()
      .at(0)
      .children()
      .text()
  ).toBe('Chapter 1: Into Programming');
  expect(
    comp
      .find('ListItem')
      .at(1)
      .children()
      .at(0)
      .children()
      .text()
  ).toBe('Chapter 2: Into JavaScript');
});
