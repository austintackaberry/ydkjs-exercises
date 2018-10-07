import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem } from './styled';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

class Home extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
  };
  render() {
    const { books } = this.props;
    return (
      <List>
        {books.map(book => (
          <StyledLink key={book.id} to={book.url}>
            <ListItem>{book.title}</ListItem>
          </StyledLink>
        ))}
      </List>
    );
  }
}

export default Home;
