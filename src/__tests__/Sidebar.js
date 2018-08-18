import React from 'react';
import { shallow } from 'enzyme';
import { score } from '../score-context';
import { Link } from 'react-router-dom';

import Sidebar from '../components/Sidebar';
import books from '../data';

it('should render the sidebar', () => {
  expect(
    shallow(
      <Sidebar
        books={books}
        isNarrowScreen={false}
        score={score}
        updateScore={() => {}}
      />
    )
      .first()
      .shallow()
  ).toHaveLength(1);
});

it('should render a link to each book', () => {
  const comp = shallow(
    <Sidebar
      books={books}
      score={score}
      isNarrowScreen={false}
      updateScore={() => {}}
    />
  )
    .first()
    .shallow();
  expect(comp.find(Link)).toHaveLength(books.length);
});
