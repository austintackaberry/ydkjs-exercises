import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  ListItemTitle,
  Divider,
  FlatButton,
  SidebarGridChild,
} from './styled';
import DrawerMenu from '../DrawerMenu';
import ProgressBar from '../ProgressBar';
import { reinitializeScore } from '../../helpers/helpers';
import Menu from '../../svgs/Menu';
import Close from '../../svgs/Close';

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
      <Fragment>
        {!shouldShow && (
          <button
            onClick={onMenuClick}
            style={{
              position: 'fixed',
              cursor: 'pointer',
              margin: '.5rem',
              border: 0,
              background: 'transparent',
            }}
          >
            <Menu />
          </button>
        )}
        <SidebarGridChild
          isNarrowScreen={isNarrowScreen}
          shouldShow={shouldShow}
        >
          <button
            onClick={onMenuClick}
            style={{
              textAlign: 'right',
              marginTop: '10px',
              border: 0,
              background: 'transparent',
              position: 'absolute',
              right: '10px',
            }}
          >
            <Close data-name="svg" />
          </button>
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

              {books.map((book, index) => {
                const { correct, possible } = this.getBookScores(
                  score.books[index]
                );

                return (
                  <DrawerMenu
                    key={`b${index}`}
                    id={`b${index}`}
                    to={book.url}
                    nest={1}
                    title={
                      <span style={{ fontSize: '1rem' }}>{`${
                        book.title
                      } (${correct} /
                  ${possible})`}</span>
                    }
                  >
                    {() =>
                      book.chapters.map((chapter, index) => {
                        const to = `${book.url}${chapter.url}/q1`;
                        return (
                          <DrawerMenu
                            key={`c${index}`}
                            id={`c${index}`}
                            to={to}
                            nest={2}
                            title={
                              <span style={{ fontSize: '.9rem' }}>
                                {chapter.title}
                              </span>
                            }
                          >
                            {() =>
                              chapter.questions.map((question, index) => {
                                const to = `${book.url}${chapter.url}/q${index +
                                  1}`;
                                return (
                                  <DrawerMenu
                                    key={`q${index}`}
                                    id={`q${index}`}
                                    to={to}
                                    nest={3}
                                    title={
                                      <span style={{ fontSize: '.9rem' }}>
                                        {`Question ${index + 1}`}
                                      </span>
                                    }
                                  />
                                );
                              })
                            }
                          </DrawerMenu>
                        );
                      })
                    }
                  </DrawerMenu>
                );
              })}
            </List>
          )}
          {shouldShow && (
            <section>
              <FlatButton onClick={this.props.handleShowReset}>
                Reset Progress
              </FlatButton>
            </section>
          )}
        </SidebarGridChild>
      </Fragment>
    );
  }
}
