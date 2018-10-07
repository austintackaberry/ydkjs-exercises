import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { List, ListItem, StyledLink } from './styled';
import styled from 'styled-components';

class BookHome extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
  };
  render() {
    const { book } = this.props;

    return (
      <List>
        {book.chapters.map(chapter => (
<<<<<<< HEAD
          <ListItem key={book.id + chapter.url}>
            <StyledLink to={book.url + chapter.url}>{chapter.title}</StyledLink>
=======
          <ListItem
            key={book.id + chapter.url}
            style={{ textAlign: 'left' }}
            >
            <StyledLink to={book.url + chapter.url}>
              {chapter.title}
            </StyledLink>
>>>>>>> bf1e3249c828218f7e9cc6e53fbafef53c25f640
          </ListItem>
        ))}
      </List>
    );
  }
}

export default BookHome;
