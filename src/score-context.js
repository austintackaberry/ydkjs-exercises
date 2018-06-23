import books from './data';
import React from 'react';

const bookScores = books.map(book => {
  return {
    title: book.title,
    chapters: book.chapters.map(chapter => {
      return {
        title: chapter.title,
        questions: chapter.questions.map(question => {
          return { answered: false };
        }),
      };
    }),
    current: book.chapters.reduce((acc, ch) => {
      return (
        acc +
        ch.questions.reduce((acc, qn) => {
          return acc + (qn.answered ? 1 : 0);
        }, 0)
      );
    }, 0),
    possible: book.chapters.reduce((acc, ch) => {
      return acc + ch.questions.length;
    }, 0),
  };
});

export const score = {
  books: bookScores,
  current:
    bookScores.reduce((acc, book) => {
      return acc + book.current;
    }, 0) || 0,
  possible:
    bookScores.reduce((acc, book) => {
      return acc + book.possible;
    }, 0) || 0,
};

export const ScoreContext = React.createContext({
  score,
  updateScore: () => {},
});
