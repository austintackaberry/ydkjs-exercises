import styled from 'styled-components';

export const List = styled.ul`
  width: 40%;
  margin: 0 auto;
  padding: 0;
  background: #ffffff;
  list-style: none;

  &:not(&:first-child) {
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    box-shadow: 0px 3px 4px rgb(0, 0, 0, 4%);
    border-radius: 5px;
  }
`;
List.displayName = 'List';

export const ListGroup = styled.div``;
ListGroup.displayName = 'ListGroup';

export const ListTitle = styled.h2`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #2e2e2e;
`;
ListTitle.displayName = 'ListTitle';

export const ListItem = styled.li`
  color: black;
  padding: 0.8rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  text-decoration: underline;
  font-size: 24px;
  line-height: 26px;
  letter-spacing: 0.01em;
  color: #2e2e2e;

  &:hover {
    background-color: rgba(200, 200, 200, 0.5);
  }
`;
ListItem.displayName = 'ListItem';
