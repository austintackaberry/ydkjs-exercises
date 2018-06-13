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
      return this.chapters
        .map(chapter => {
          return chapter.questions
            .map(question => {
              return question.answered ? 1 : 0;
            })
            .reduce((x, y) => x + y, 0);
        })
        .reduce((x, y) => x + y, 0);
    },
    getPossible: function() {
      return this.chapters
        .map(chapter => {
          return chapter.questions.length;
        })
        .reduce((x, y) => x + y);
    },
  };
});

export const ScoreContext = React.createContext({
  score: [...score],
  updateScore: () => {},
});
