import React from 'react';
import { shallow } from 'enzyme';

import BookRouter from '../components/BookRouter';

const UpGoingChapters = [
  {
    title: "Chapter 1: Into Programming",
    url: "/ch1",
  },
];

const book = {
  url: "/up-going",
  title: "Up & Going",
  id: "upGoing",
  chapters: UpGoingChapters
};

it('should render book chapters', () => {
  const comp = shallow(<BookRouter book={book} />);
  expect(comp.find('h2').length).toBe(1);
  expect(comp.find('h2').at(0).text()).toBe('Up & Going');
  expect(comp.find('Route').at(0).prop('path')).toBe('/up-going');
  expect(comp.find('Route').at(1).prop('path')).toBe('/up-going/ch1');
});
