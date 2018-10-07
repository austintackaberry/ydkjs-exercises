import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  text-align: left;

  &:hover {
    background-color: rgba(200, 200, 200, 0.5);
  }
`;
ListItem.displayName = 'ListItem';

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: '#000';
`;
