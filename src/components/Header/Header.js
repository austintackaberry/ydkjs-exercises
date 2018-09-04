import React from 'react';
import { HeaderGridChild, Marquee } from './styled';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderGridChild data-name="Header">
      <Link style={{ textDecoration: 'none', color: 'black' }} to="/">
        <Marquee>{`YDKJS EXERCISES`}</Marquee>
      </Link>
    </HeaderGridChild>
  );
};

export default Header;
