import React from 'react';
import { shallow } from 'enzyme';

import ChapterRouter from '../components/ChapterRouter';

const questions = [
  {
    question:
      'How many expressions are there in the following statement: a = b * 2;',
    answers: [
      { answer: 'One', isCorrect: false },
      { answer: 'Two', isCorrect: false },
      { answer: 'Three', isCorrect: false },
      { answer: 'Four', isCorrect: true },
    ],
  },
];
const chapter = {
  title: 'Chapter 1: Into Programming',
  url: '/ch1',
  questions,
};
const bookUrl = '/up-going';
const bookId = 0;
const chapterId = 0;

const chapterWithoutQuestions = {
  title: 'Chapter 1: Into Programming',
  url: '/ch1',
};

it('should render the chapters', () => {
  const comp = shallow(
    <ChapterRouter
      bookId={bookId}
      bookUrl={bookUrl}
      chapter={chapter}
      chapterId={chapterId}
    />
  );
  expect(
    comp
      .find('Link')
      .at(0)
      .prop('to')
  ).toBe(bookUrl + chapter.url);
  expect(comp.find('h3').length).toBe(1);
  expect(
    comp
      .find('h3')
      .at(0)
      .text()
  ).toBe('Chapter 1: Into Programming');
  expect(
    comp
      .find('Route')
      .at(0)
      .prop('path')
  ).toBe('/up-going/ch1');
  expect(
    comp
      .find('Route')
      .at(1)
      .prop('path')
  ).toBe('/up-going/ch1/q1');
});

it('should render no questions if chapter has none', () => {
  const comp = shallow(
    <ChapterRouter
      bookId={bookId}
      bookUrl={bookUrl}
      chapter={chapterWithoutQuestions}
      chapterId={chapterId}
    />
  );
  expect(
    comp
      .find('Link')
      .at(0)
      .prop('to')
  ).toBe(bookUrl + chapter.url);
  expect(comp.find('h3').length).toBe(1);
  expect(
    comp
      .find('h3')
      .at(0)
      .text()
  ).toBe('Chapter 1: Into Programming');
  expect(
    comp
      .find('Route')
      .at(0)
      .prop('path')
  ).toBe('/up-going/ch1');
  expect(comp.find('NoQuestions').length).toBe(1);
});
