import React from 'react';
import { shallow } from 'enzyme';

import ChapterHome from '../components/ChapterHome';

const props = {
  currentUrl: '/testroute',
};

it('should render redirect', () => {
  const comp = shallow(<ChapterHome {...props} />);
  expect(comp.find('Redirect').length).toBe(1);
  expect(comp.find('Redirect').at(0).prop('to')).toBe('/testroute/q1');
});
