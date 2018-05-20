import React from 'react';
import { shallow } from 'enzyme';

import Home from '../components/Home';

const books = [
  {
    url: "/up-going",
    title: "Up & Going",
    id: "upGoing",
    chapters: null
  },
  {
    url: "/scope-closures",
    title: "Scope & Closures",
    id: "scopeClosures",
    chapters: null
  },
];

it('should render Home view', () => {
  const comp = shallow(<Home books={books} />);
  expect(comp.find('Link').length).toBe(2);
  expect(comp.find('Link').at(0).prop('to')).toBe('/up-going');
  expect(comp.find('Link').at(1).prop('to')).toBe('/scope-closures');
  expect(comp.find('ListItem').at(0).prop('primaryText')).toBe('Up & Going');
  expect(comp.find('ListItem').at(1).prop('primaryText')).toBe('Scope & Closures');
});
