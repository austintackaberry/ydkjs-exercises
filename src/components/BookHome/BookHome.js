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
      <div className="UpGoing">
        <List style={{ width: '40%', margin: '0 auto', textAlign: 'center' }}>
          {book.chapters.map(chapter => (
            <Link
              key={book.id + chapter.url}
              style={{ textDecoration: 'none' }}
              to={book.url + chapter.url}
            >
              <ListItem>{chapter.title}</ListItem>
            </Link>
          ))}
        </List>
      </div>
    );
  }
}

export default BookHome;
