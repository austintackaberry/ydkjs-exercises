import books from './data';
import React from 'react';

export const score = books.map(book => {
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
    getAnswered: function() {
      return this.chapters.reduce((acc, ch) => {
        return (
          acc +
          ch.questions.reduce((acc, qn) => {
            return acc + (qn.answered ? 1 : 0);
          }, 0)
        );
      }, 0);
    },
    getPossible: function() {
      return this.chapters.reduce((acc, ch) => {
        return acc + ch.questions.length;
      }, 0);
    },
  };
});

export const ScoreContext = React.createContext({
  score: [...score],
  updateScore: () => {},
});
