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

const randomBooks = Array.from(
  Array(Math.floor(Math.random() * 100)).keys()
).map(book => {
  return {
    id: book,
    url: 'url',
    title: 'title',
    chapters: null,
  };
});
const randomScore = {
  books: randomBooks,
  current: 0,
  possible: 0,
};

it('should render the sidebar', () => {
  expect(
    shallow(<Sidebar books={booksWithIdsMapped} score={score} />)
  ).toHaveLength(1);
});

it('should render a link to each book', () => {
  const comp = shallow(<Sidebar books={booksWithIdsMapped} score={score} />);
  expect(comp.find(Link)).toHaveLength(booksWithIdsMapped.length);

  const five = shallow(<Sidebar books={randomBooks} score={randomScore} />);
  expect(five.find(Link)).toHaveLength(randomBooks.length);
});
