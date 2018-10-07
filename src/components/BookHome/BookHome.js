import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, StyledLink } from './styled';

class BookHome extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
  };
  render() {
    const { book } = this.props;

    return (
      <List>
        {book.chapters.map(chapter => (
          <ListItem key={book.id + chapter.url} style={{ textAlign: 'left' }}>
            <StyledLink to={book.url + chapter.url}>{chapter.title}</StyledLink>
          </ListItem>
        ))}
      </List>
    );
  }
}

export default BookHome;
