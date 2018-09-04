import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  ListItemTitle,
  Divider,
  FlatButton,
  SidebarGridChild,
} from './styled';
import { Link, withRouter } from 'react-router-dom';
import ProgressBar from '../ProgressBar';
import { reinitializeScore } from '../../helpers/helpers';
import Close from '../../svgs/Close';
import Menu from '../../svgs/Menu';

const ResetButton = props =>
  withRouter(({ history, resetScore }) => (
    <FlatButton
      onClick={() => {
        resetScore();
        history.push('/');
      }}
    >
      Reset Progress
    </FlatButton>
  ))(props);

export default class Sidebar extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    score: PropTypes.object.isRequired,
    updateScore: PropTypes.func.isRequired,
  };

  resetScore = () => {
    const { score, updateScore } = this.props;
    const newScore = reinitializeScore(score);
    updateScore(newScore);
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
    const {
      score,
      books,
      isNarrowScreen,
      onMenuClick,
      shouldShow,
    } = this.props;
    const scoreAnswered = score.correct + score.incorrect;
    const scorePct = Math.round((100 * score.correct) / scoreAnswered) || 0;

    return (
      <SidebarGridChild
        name="Sidebar"
        isNarrowScreen={isNarrowScreen}
        shouldShow={shouldShow}
      >
        <div
          onClick={e => onMenuClick(e)}
          style={{
            textAlign: 'right',
            margin: '10px 10px 0 0',
          }}
        >
          {shouldShow ? <Close /> : <Menu />}
        </div>
        {shouldShow && (
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
                <strong>{score.possible - scoreAnswered}</strong> left to
                answer.
              </p>
            </ListItem>

            <Divider />

            <ListItemTitle>Books</ListItemTitle>
            {books.map((book, index) => (
              <Link
                key={index}
                style={{ textDecoration: 'none' }}
                to={book.url}
                onClick={e => isNarrowScreen && onMenuClick(e)}
              >
                <ListItem>
                  {`${book.title} (${
                    this.getBookScores(score.books[index]).correct
                  } /
                  ${this.getBookScores(score.books[index]).possible})`}
                </ListItem>
              </Link>
            ))}
          </List>
        )}
        {shouldShow && (
          <section>
            <ResetButton resetScore={this.resetScore} />
          </section>
        )}
      </SidebarGridChild>
    );
  }
}
