import books from './data';
import React from 'react';

const CORRECT = 'CORRECT';
const INCORRECT = 'INCORRECT';
const UNANSWERED = 'UNANSWERED';

const bookScores = books.map(book => {
  return {
    title: book.title,
    chapters: book.chapters.map(chapter => {
      return {
        title: chapter.title,
        questions: chapter.questions.map(question => {
          return { status: UNANSWERED };
        }),
      };
    }),
  };
});

export const score = {
  books: bookScores,
  correct:
    bookScores.reduce((a, book) => {
      return (
        a +
        book.chapters.reduce((b, ch) => {
          return (
            b +
            ch.questions.reduce((acc, qn) => {
              return acc + (qn.status === CORRECT ? 1 : 0);
            }, 0)
          );
        }, 0)
      );
    }, 0) || 0,
  incorrect:
    bookScores.reduce((a, book) => {
      return (
        a +
        book.chapters.reduce((b, ch) => {
          return (
            b +
            ch.questions.reduce((acc, qn) => {
              return acc + (qn.status === INCORRECT ? 1 : 0);
            }, 0)
          );
        }, 0)
      );
    }, 0) || 0,
  possible:
    bookScores.reduce((a, book) => {
      return (
        a +
        book.chapters.reduce((b, ch) => {
          return b + ch.questions.length;
        }, 0)
      );
    }, 0) || 0,
};

export const ScoreContext = React.createContext({
  score,
  updateScore: () => {},
});
