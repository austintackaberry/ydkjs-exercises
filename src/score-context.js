import books from "./data";
import React from "react";

export const score = books.map(book => {
  return {
    title: book.title,
    chapters: book.chapters.map(chapter => {
      return {
        title: chapter.title,
        questions: chapter.questions.map(question => {
          return { answered: false };
        })
      };
    })
  };
});

export const ScoreContext = React.createContext({
  score: [...score],
  updateScore: () => {}
});
