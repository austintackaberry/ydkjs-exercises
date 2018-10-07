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
          <StyledLink key={book.id + chapter.url} to={book.url + chapter.url}>
            <ListItem>{chapter.title}</ListItem>
          </StyledLink>
        ))}
      </List>
    );
  }
}

export default BookHome;
