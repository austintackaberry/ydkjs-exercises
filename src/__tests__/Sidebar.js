import React from 'react';
import { shallow } from 'enzyme';
import { score } from '../score-context';
import Sidebar from '../components/Sidebar';
import books from '../data';

it('should render the sidebar', () => {
  const comp = shallow(
    <div>
      <Sidebar
        data-name="Sidebar"
        books={books}
        isNarrowScreen={false}
        score={score}
        shouldShow={true}
        updateScore={() => {}}
        onMenuClick={() => {}}
      />
    </div>
  );
  expect(comp.first().shallow()).toHaveLength(1);
});
