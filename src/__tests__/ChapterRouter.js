import React from 'react';
import { renderWithRouter } from 'test-utils';
import { ScoreContext, score } from '../score-context';
import rawBooks from '../data';
import { initializeBooks } from '../helpers/helpers';

import ChapterRouter from '../components/ChapterRouter';

const books = initializeBooks(rawBooks);

const generateTestData = ({ bookId, chapterId, questionId }) => {
  const book = books[bookId];
  const bookUrl = book.url;
  const chapter = book.chapters[chapterId];
  const questionPathname = `${bookUrl}${chapter.url}/q${questionId + 1}`;

  return {
    props: {
      bookId,
      bookUrl,
      chapter,
      chapterId,
    },
    route: questionPathname,
  };
};

it('should render the first question of Up & Going, Ch1', () => {
  const bookId = 0;
  const chapterId = 0;
  const questionId = 0;
  const { props, route } = generateTestData({
    bookId,
    chapterId,
    questionId,
  });
  const { getByText } = renderWithRouter(
    <ScoreContext.Provider value={{ score, updateScore: () => {} }}>
      <ChapterRouter {...props} />
    </ScoreContext.Provider>,
    { route }
  );
  expect(getByText(props.chapter.title)).toBeTruthy();

  const {
    chapter: { questions },
  } = props;
  expect(
    getByText(`Question ${questionId + 1} of ${questions.length}`)
  ).toBeTruthy();
});
