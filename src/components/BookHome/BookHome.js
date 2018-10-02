import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { List, ListItem } from './styled';

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
            <Link 
              to={book.url + chapter.url}
              style={{ textDecoration: 'none', color: '#000' }}
              >
              {chapter.title}
            </Link>
          </ListItem>
        ))}
      </List>
    );
  }
}

export default BookHome;
