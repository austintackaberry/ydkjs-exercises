import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListItemTitle, Divider, Wrapper } from './styled';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    score: PropTypes.object.isRequired,
  };
  render() {
    const books = this.props.books;
    const score = this.props.score;
    const currentScore = score.current;
    const possibleScore = score.possible;

    const scoreDisplay = `You've answered ${currentScore} of ${possibleScore} questions correctly. Time to dive in!`;

    return (
      <Wrapper>
        <List>
          <ListItemTitle>Progress</ListItemTitle>
          <ListItem>{scoreDisplay}</ListItem>

          <Divider />

          <ListItemTitle>Books</ListItemTitle>
          {books.map((book, index) => (
            <Link
              key={book.id}
              style={{ textDecoration: 'none' }}
              to={book.url}
            >
              <ListItem>
                {`${book.title} (${score.books[index].current}/
                  ${score.books[index].possible})`}
              </ListItem>
            </Link>
          ))}
        </List>
      </Wrapper>
    );
  }
}

export default Sidebar;
