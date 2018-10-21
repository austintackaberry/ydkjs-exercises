import React from 'react';
import { renderWithRouter } from 'test-utils';
import rawBooks from '../data';
import { initializeBooks } from '../helpers/helpers';
import BookRouter from '../components/BookRouter';

const books = initializeBooks(rawBooks);

it('should render book chapters', () => {
  const [book] = books;
  const { getByText } = renderWithRouter(<BookRouter book={book} />, {
    route: book.url,
  });
  expect(getByText(book.title)).toBeTruthy();
  book.chapters.forEach(chapter => {
    expect(getByText(chapter.title)).toBeTruthy();
  });
});
