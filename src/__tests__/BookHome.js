import React from 'react';
import { renderWithRouter } from 'test-utils';
import BookHome from '../components/BookHome';
import rawBooks from '../data';
import { initializeBooks } from '../helpers/helpers';

const books = initializeBooks(rawBooks);

it('should render the book chapters', () => {
  const [book] = books;
  const { getByText } = renderWithRouter(<BookHome book={book} />);
  book.chapters.forEach(chapter => {
    expect(getByText(chapter.title)).toBeTruthy();
  });
});
