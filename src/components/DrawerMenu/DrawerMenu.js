import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Toggle from '../Toggle';
import { Link } from 'react-router-dom';
import { ListItem } from './styled';

const DrawerMenu = props => {
  const { children, id, to, menuText, nest } = props;
  return (
    <Toggle>
      {({ show, toggle }) => (
        <Fragment>
          <ListItem nest={nest}>
            <Link key={id} to={to} style={{ textDecoration: 'none' }}>
              {menuText}
            </Link>&nbsp;
            {children && (
              <button type="button" onClick={toggle}>
                {show ? '⬆' : '⬇'}
              </button>
            )}
          </ListItem>
          {show && children && children()}
        </Fragment>
      )}
    </Toggle>
  );
};

DrawerMenu.propTypes = {
  children: PropTypes.func,
  key: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default DrawerMenu;
