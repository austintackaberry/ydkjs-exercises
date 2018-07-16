import React from 'react';
import { shallow } from 'enzyme';
import ProgressBar from '../components/ProgressBar';

const dummyScore = {
  correct: 33,
  incorrect: 33,
  possible: 100,
};

it('should render the progress bar', () => {
  expect(shallow(<ProgressBar score={dummyScore} />)).toHaveLength(1);
});

it('should render two segments: one for "correct" answers, the other for "incorrect"', () => {
  expect(shallow(<ProgressBar score={dummyScore} />).children()).toHaveLength(
    2
  );
});

// it('should render a link to each book', () => {
//   const comp = shallow(<Sidebar books={booksWithIdsMapped} score={score} />);
//   expect(comp.find(Link)).toHaveLength(booksWithIdsMapped.length);

//   const five = shallow(<Sidebar books={randomBooks} score={randomScore} />);
//   expect(five.find(Link)).toHaveLength(randomBooks.length);
// });
