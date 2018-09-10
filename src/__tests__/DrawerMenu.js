import React from 'react';
import { shallow } from 'enzyme';

import DrawerMenu from '../components/DrawerMenu';

it('should render without breaking', () => {
  const comp = shallow(<DrawerMenu id="0" to="" title="" nest={1} />);
  expect(comp).toMatchSnapshot();
});
