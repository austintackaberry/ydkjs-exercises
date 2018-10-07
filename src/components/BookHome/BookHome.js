import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { List, ListItem } from './styled';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  text-align: left;
`;

class BookHome extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
  };
  render() {
    const { book } = this.props;

    return (
      <List>
        {book.chapters.map(chapter => (
          <ListItem
            key={book.id + chapter.url}
            style={{ textAlign: 'left' }}
            >
            <StyledLink to={book.url + chapter.url}>
              {chapter.title}
            </StyledLink>
          </ListItem>
        ))}
      </List>
    );
  }
}

export default BookHome;
