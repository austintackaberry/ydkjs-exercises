import React, { Component } from "react";
import BookHome from "./BookHome";
import { Route, Link, Switch } from "react-router-dom";
import NoMatch from "./NoMatch";
import ChapterRouter from "./ChapterRouter";

class BookRouter extends Component {
  render() {
    const { book } = this.props;
    return (
      <div>
        <Link style={{ textDecoration: "none", color: "black" }} to={book.url}>
          <h2 style={{ fontSize: "40px" }}>{book.title}</h2>
        </Link>
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
