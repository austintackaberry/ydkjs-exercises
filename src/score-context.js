import books from './data';
import React from 'react';

const UNANSWERED = 'UNANSWERED';

// Initialize bookScores

const bookScores = books.map(book => {
  return {
    title: book.title,
    chapters: book.chapters.map(chapter => {
      return {
        title: chapter.title,
        questions: chapter.questions.map(question => {
          return { status: UNANSWERED, questionId: question.questionId };
        }),
      };
    }),
  };
});

// Initialize score

export const score = {
  books: bookScores,
  correct: 0,
  incorrect: 0,
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
