import styled from 'styled-components';

export const List = styled.ul`
  width: 40%;
  margin: 0 auto;
  list-style: none;
`;

export const ListItem = styled.li`
  fontsize: 25px;
  lineheight: 25px;
  padding: 0.8rem;

  &:hover {
    background-color: rgba(200, 200, 200, 0.5);
  }
`;
