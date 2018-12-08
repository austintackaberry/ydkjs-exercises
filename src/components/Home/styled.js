import styled from 'styled-components';

export const List = styled.ul`
  width: 40%;
  margin: 0 auto;
  list-style: none;
  padding: 0;
`;
List.displayName = 'List';

export const ListItem = styled.li`
  color: black;
  font-size: 25px;
  line-height: 25px;
  padding: 0.8rem;

  &:hover {
    background-color: rgba(200, 200, 200, 0.5);
  }
`;
ListItem.displayName = 'ListItem';
