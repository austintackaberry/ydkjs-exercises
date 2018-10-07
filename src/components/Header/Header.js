import React from 'react';
import { HeaderGridChild, Marquee } from './styled';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Header = () => {
  return (
    <HeaderGridChild data-name="Header">
      <StyledLink to="/">
        <Marquee>{`YDKJS EXERCISES`}</Marquee>
      </StyledLink>
    </HeaderGridChild>
  );
};

export default Header;
