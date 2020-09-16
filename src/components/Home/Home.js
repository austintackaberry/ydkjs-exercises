import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListTitle } from './styled';
import { Link } from 'react-router-dom';

class Home extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
  };
  render() {
    const { books } = this.props;
    return (
      <List>
        <ListTitle>Books:</ListTitle>
        {books.map(book => (
          <Link
            key={book.id}
            data-testid={book.id}
            style={{ textDecoration: 'none' }}
            to={book.url}
          >
            <ListItem>{book.title}</ListItem>
          </Link>
        ))}
      </List>
    );
  }
}

export default Home;
