import React from 'react';
import { HeaderGridChild, Marquee } from './styled';
import { Link } from 'react-router-dom';
import Menu from '../../svgs/Menu';

const Header = ({ show, toggle }) => {
  return (
    <HeaderGridChild data-name="Header">
      {!show && (
        <div>
          <button
            onClick={toggle}
            style={{
              flexGrow: 0,
              cursor: 'pointer',
              margin: '.5rem',
              marginRight: 0,
              border: 0,
              background: 'transparent',
            }}
            data-testid="openSidebar"
          >
            <Menu />
          </button>
        </div>
      )}
      <div style={{ flexGrow: '1', marginTop: '2vh' }}>
        <Link
          style={{
            textDecoration: 'none',
            color: 'black',
            textAlign: 'center',
          }}
          to="/"
        >
          <Marquee>{`You Don't Know JS Exercises`}</Marquee>
        </Link>
      </div>
    </HeaderGridChild>
  );
};

export default Header;
