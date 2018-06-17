import React from 'react';
import { shallow } from 'enzyme';
import { score } from '../score-context';
import { Link } from 'react-router-dom';

import Sidebar from '../components/Sidebar';
import books from '../data';

const booksWithIdsMapped = books.map((book, index) => {
  book.id = index;
  return book;
});
const fiveBooks = [1, 2, 3, 4, 5].map(book => {
  return {
    id: 5,
    url: 'url',
    title: 'title',
    chapters: null,
  };
});
const scoreForFiveBooks = {
  books: fiveBooks,
  current: 5,
  possible: 5,
};

it('should render the sidebar', () => {
  expect(
    shallow(<Sidebar books={booksWithIdsMapped} score={score} />)
  ).toHaveLength(1);
});

it('should render a link to each book', () => {
  const comp = shallow(<Sidebar books={booksWithIdsMapped} score={score} />);
  expect(comp.find(Link)).toHaveLength(booksWithIdsMapped.length);

  const five = shallow(<Sidebar books={fiveBooks} score={scoreForFiveBooks} />);
  expect(five.find(Link)).toHaveLength(5);
});
