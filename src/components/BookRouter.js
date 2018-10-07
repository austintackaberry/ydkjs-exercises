import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookHome from './BookHome';
import { Route, Link, Switch } from 'react-router-dom';
import NoMatch from './NoMatch';
import ChapterRouter from './ChapterRouter';
import styled from 'styled-components';

const StyledH2 = styled.h2`
  text-decoration: underline;
  font-size: 35px;
  margin: 10px 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

class BookRouter extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
  };

  render() {
    const { book } = this.props;
    return (
      <div>
        <StyledLink to={book.url}>
          <StyledH2>{book.title}</StyledH2>
        </StyledLink>
        <Switch>
          <Route
            exact
            path={book.url}
            render={() => {
              return <BookHome key={book.id} book={book} />;
            }}
          />
          {book.chapters.map((chapter, index) => {
            return (
              <Route
                key={index}
                path={book.url + chapter.url}
                render={() => (
                  <ChapterRouter
                    bookId={book.id}
                    chapterId={index}
                    bookUrl={book.url}
                    chapter={chapter}
                  />
                )}
              />
            );
          })}
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default BookRouter;
