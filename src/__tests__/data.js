import books from '../data';
import { createScoreMap } from '../helpers/helpers';

it('Should have a 20 char unique id for each question', () => {
  const score = { books };
  const scoreMap = createScoreMap(score);
  const counter = books.reduce((acc, book) => {
    book.chapters.forEach(chapter => {
      chapter.questions.forEach(question => {
        expect(question.explanation.length).toBeGreaterThan(0);
        expect(question.questionId).toHaveLength(20);
        expect(scoreMap).toHaveProperty(question.questionId);
        acc++;
      });
    });
    return acc;
  }, 0);
  expect(counter).toEqual(Object.keys(scoreMap).length);
});
