import React from 'react';
import { shallow } from 'enzyme';

import ChapterRouter from '../components/ChapterRouter';
// eslint-disable-next-line no-unused-vars
import NoQuestions from '../components/NoQuestions';

const questions = [
    {
      question: "How many expressions are in the following statement: a = b * 2;",
      answers: [
        { answer: "one", isCorrect: false },
        { answer: "two", isCorrect: false },
        { answer: "three", isCorrect: false },
        { answer: "four", isCorrect: true },
      ]
    },
];
const chapter = {
  title: "Chapter 1: Into Programming",
  url: "/ch1",
  questions,
};
const bookUrl = '/up-going';
const bookId = 'upGoing';

const chapterWithoutQuestions = {
  title: "Chapter 1: Into Programming",
  url: "/ch1",
};

it('should render the chapters', () => {
  const comp = shallow(
    <ChapterRouter bookId={bookId} bookUrl={bookUrl} chapter={chapter} />
  );
  expect(comp.find('Link').at(0).prop('to')).toBe(bookUrl+chapter.url);
  expect(comp.find('h3').length).toBe(1);
  expect(comp.find('h3').at(0).text()).toBe('Chapter 1: Into Programming');
  expect(comp.find('Route').at(0).prop('path')).toBe('/up-going/ch1');
  expect(comp.find('Route').at(1).prop('path')).toBe('/up-going/ch1/q1');
});

it('should render no questions if chapter has none', () => {
  const comp = shallow(
    <ChapterRouter
      bookId={bookId}
      bookUrl={bookUrl}
      chapter={chapterWithoutQuestions}
    />
  );
  expect(comp.find('Link').at(0).prop('to')).toBe(bookUrl+chapter.url);
  expect(comp.find('h3').length).toBe(1);
  expect(comp.find('h3').at(0).text()).toBe('Chapter 1: Into Programming');
  expect(comp.find('Route').at(0).prop('path')).toBe('/up-going/ch1');
  expect(comp.find('NoQuestions').length).toBe(1);
});
