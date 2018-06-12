import React from 'react';
import { shallow } from 'enzyme';

import NoQuestions from '../components/NoQuestions';

it('should render NoQuestions', () => {
  const comp = shallow(<NoQuestions />);
  expect(comp.find('p').length).toBe(2);
  expect(comp
    .find('p')
    .at(0)
    .text()
  ).toBe('There are currently no questions for this chapter :(,'+
    ' but you can change that!');
  expect(comp
    .find('p')
    .at(1)
    .text()
  ).toBe('Feel free to submit a pull request to this project here.');
  expect(comp
    .find('a')
    .at(0)
    .prop('href')
  ).toBe('https://github.com/austintackaberry/ydkjs-exercises');
});
