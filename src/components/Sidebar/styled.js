import styled from 'styled-components';

export const Divider = styled.hr`
  height: 12px;
  border: 0;
  box-shadow: inset 0 12px 12px -12px rgba(0, 0, 0, 0.5);
`;

export const List = styled.ul`
  list-style: none;
  width: 100%;
  margin: 0 auto;
  padding: 1rem 0;
`;

export const MenuItem = styled.li`
  list-style: none;
  width: 100%;
  margin: 0 ${props => (props.nestLevel ? props.NestLevel : '1rem')};
  padding: 1rem 0;
`;

export const ListItemTitle = styled.li`
  list-style: none;
  font-size: 16px;
  font-weight: bold;
  line-height: 16px;
  padding: 0.5rem 0;
`;
export const ListItem = styled.li`
  color: black;
  list-style: none;
  font-size: 12px;
  line-height: 12px;
  padding: 0.5rem 0.3rem;
`;

export const FlatButton = styled.button`
  background-color: lightgrey;
  border: none;
  padding: 0.5rem 1.5rem;
`;

export const SidebarGridChild = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  background-color: white;
  grid-area: sidebar;
  padding-bottom: 1rem;
  text-align: center;
  transition: ${props =>
    props.shouldShow ? 'var(--easing-decelerate)' : 'var(--easing-accelerate)'};
  width: ${props =>
    props.shouldShow ? (props.isNarrowScreen ? '80vw' : '20vw') : '0'};
  overflow-x: hidden;
  overflow-y: scroll;
  z-index: 11;
  &::-webkit-scrollbar {
    display: none;
  }

  svg {
    padding-left: ${props => (props.shouldShow ? 'none' : '1rem')};
    cursor: pointer;
  }
`;

FlatButton.displayName = 'FlatButton';
