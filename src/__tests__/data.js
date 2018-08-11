import books from '../data';
import { createScoreMap } from '../helpers/helpers';

it('Should have a unique id for each question', () => {
  const score = { books };
  const scoreMap = createScoreMap(score);
  const counter = books.reduce((acc, book) => {
    book.chapters.forEach(chapter => {
      chapter.questions.forEach(question => {
        acc++;
      });
    });
    return acc;
  }, 0);
  expect(counter).toEqual(Object.keys(scoreMap).length);
});
