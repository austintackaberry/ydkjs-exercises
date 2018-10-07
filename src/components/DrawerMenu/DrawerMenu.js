import React from 'react';
import PropTypes from 'prop-types';
import Toggle from '../Toggle';
import ChevronDown from '../../svgs/ChevronDown';
import ChevronRight from '../../svgs/ChevronRight';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  ListItem,
  DrawerMenuParent,
  DrawerMenuChild,
  ArrowButton,
} from './styled';

const StyledLink = styled(Link)`
  text-decoration: none;
`;
const DrawerMenu = props => {
  const { children, id, to, title, nest } = props;
  return (
    <Toggle>
      {({ show, toggle }) => (
        <DrawerMenuParent>
          <ListItem key={id} nest={nest}>
            <ArrowButton onClick={toggle}>
              {children && (show ? <ChevronDown /> : <ChevronRight />)}
            </ArrowButton>
            <StyledLink to={to}>{title}</StyledLink>
          </ListItem>
          <DrawerMenuChild show={show}>
            {children && children()}
          </DrawerMenuChild>
        </DrawerMenuParent>
      )}
    </Toggle>
  );
};

DrawerMenu.propTypes = {
  children: PropTypes.func,
  id: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  title: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.object.isRequired,
  ]),
  nest: PropTypes.number.isRequired,
};

export default DrawerMenu;
