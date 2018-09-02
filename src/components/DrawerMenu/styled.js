import styled from 'styled-components';

export const List = styled.ul`
  width: 40%;
  margin: 0 auto;
  list-style: none;
  padding: 0;
`;
List.displayName = 'List';

export const ListItem = styled.li`
  fontsize: 25px;
  lineheight: 25px;
  padding: 0.8rem calc(2rem + (1rem * (${props => props.nest || 1}) / 1));
  text-align: left;

  &:hover {
    background-color: rgba(200, 200, 200, 0.5);
  }
`;
ListItem.displayName = 'ListItem';
