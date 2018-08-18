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
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  width: 100%;
  max-width: 250px;
  height: 100%;
  z-index: 99999;
`;

export const FlatButton = styled.button`
  background-color: lightgrey;
  border: none;
  padding: 0.5rem 1.5rem;
`;
FlatButton.displayName = 'FlatButton';
