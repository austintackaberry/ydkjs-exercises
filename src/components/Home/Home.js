import React, { Component } from 'react';
import { List, ListItem } from './styled';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    const { books } = this.props;
    return (
      <div className="page">
        <List>
          {books.map(book => (
            <Link
              key={book.id}
              style={{ textDecoration: 'none' }}
              to={book.url}
            >
              <ListItem>{book.title}</ListItem>
            </Link>
          ))}
        </List>
      </div>
    );
  }
}

export default Home;
