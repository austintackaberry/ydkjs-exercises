import React from 'react';
import { HeaderGridChild, Marquee, LeftSeparator } from './styled';
import DarkModeToggle from '../DarkModeToggle/index';
import { Link } from 'react-router-dom';
import Menu from '../../svgs/Menu';

const Header = ({ show, toggle }) => {
  return (
    <HeaderGridChild data-name="Header">
      {!show && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            paddingTop: '0.6rem',
            height: 'max-content',
          }}
        >
          <button
            onClick={toggle}
            style={{
              flexGrow: 0,
              cursor: 'pointer',
              margin: 0,
              marginRight: 0,
              border: 0,
              background: 'transparent',
            }}
            data-testid="openSidebar"
          >
            <Menu />
          </button>
          <DarkModeToggle />
        </div>
      )}
      <div
        style={{
          flexGrow: '1',
          marginTop: '2vh',
          alignSelf: 'flex-end',
        }}
      >
        <Link
          style={{
            textDecoration: 'none',
            color: 'black',
            textAlign: 'center',
          }}
          to="/"
        >
          <Marquee>
            You Don't Know JS <LeftSeparator>Exercises</LeftSeparator>
          </Marquee>
        </Link>
      </div>
    </HeaderGridChild>
  );
};

export default Header;
