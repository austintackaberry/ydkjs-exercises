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

export const ListItemTitle = styled.li`
  list-style: none;
  font-size: 16px;
  font-weight: bold;
  line-height: 16px;
  padding: 0.5rem 0;
`;
export const ListItem = styled.li`
  list-style: none;
  font-size: 12px;
  line-height: 12px;
  padding: 0.5rem 0.3rem;
`;

export const Wrapper = styled.div`
  background-color: white;
  z-index: 10;
`;

export const FlatButton = styled.button`
  background-color: lightgrey;
  border: none;
  padding: 0.5rem 1.5rem;
`;

export const SidebarGridChild = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
  grid-area: sidebar;
  padding: ${props => (props.shouldShow ? 'auto' : '0 0.5rem')};
  text-align: center;
  transition: 0.2s cubic-bezier(0.03, 0.86, 0.59, 0.45);
  width: ${props =>
    props.shouldShow ? (props.isNarrowScreen ? '80vw' : '20vw') : '2rem'};
`;

FlatButton.displayName = 'FlatButton';
