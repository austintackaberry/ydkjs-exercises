import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListItemTitle, Divider, Wrapper } from './styled';
import { Link } from 'react-router-dom';
import ProgressBar from '../ProgressBar';

class Sidebar extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    score: PropTypes.object.isRequired,
  };

  getBookScores(book) {
    const CORRECT = 'CORRECT';
    return {
      correct:
        book.chapters.reduce((b, ch) => {
          return (
            b +
            ch.questions.reduce((acc, qn) => {
              return acc + (qn.status === CORRECT ? 1 : 0);
            }, 0)
          );
        }, 0) || 0,
      possible:
        book.chapters.reduce((b, ch) => {
          return b + ch.questions.length;
        }, 0) || 0,
    };
  }

  render() {
    const books = this.props.books;
    const score = this.props.score;
    const scoreAnswered = score.correct + score.incorrect;
    const scorePct = Math.round((100 * score.correct) / scoreAnswered) || 0;

    return (
      <Wrapper>
        <List>
          <ListItemTitle>Progress</ListItemTitle>
          <ListItem>
            <ProgressBar score={score} />
          </ListItem>
          <ListItem>
            <p>
              You've answered <strong>{score.correct}</strong> out of{' '}
              <strong>{scoreAnswered}</strong> (<strong>{scorePct}%</strong>)
              questions correctly.
            </p>
            <p>
              <strong>{score.possible - scoreAnswered}</strong> left to answer.
            </p>
          </ListItem>

          <Divider />

          <ListItemTitle>Books</ListItemTitle>
          {books.map((book, index) => (
            <Link
              key={book.id}
              style={{ textDecoration: 'none' }}
              to={book.url}
            >
              <ListItem>
                {`${book.title} (${this.getBookScores(book).correct} /
                  ${this.getBookScores(book).possible})`}
              </ListItem>
            </Link>
          ))}
        </List>
      </Wrapper>
    );
  }
}

export default Sidebar;
