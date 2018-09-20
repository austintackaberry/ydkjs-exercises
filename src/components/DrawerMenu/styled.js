import styled from 'styled-components';

export const ListItem = styled.li`
  font-size: 25px;
  padding: 0.5rem calc(0.5rem + (1rem * (${props => props.nest || 1}) / 1));
  text-align: left;

  &:hover {
    background: rgba(200, 200, 200, 0.5);
  }
`;

export const ArrowButton = styled.button`
  marginright: 0.5rem;
  border: 0;
  background: transparent;

  &:hover {
    background: transparent;
  }

  &:focus {
    outline: none;
  }
`;

export const DrawerMenuParent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  transition: var(--easing-standard);
`;

export const DrawerMenuChild = styled.div`
  max-height: ${props => (props.show ? '400vh' : '1px')};
  overflow-y: hidden;
  transition: var(--easing-slower);
`;

// export const DrawerToggle = styled.div`
//   flex-
// `
ListItem.displayName = 'ListItem';
