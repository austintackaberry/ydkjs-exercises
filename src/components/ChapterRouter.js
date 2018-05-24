import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import ChapterHome from "./ChapterHome";
import Question from "./Question";

class ChapterRouter extends Component {
  render() {
    const { chapter, bookUrl } = this.props;

    return (
      <div>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={bookUrl + chapter.url}
        >
          <h3 style={{ fontSize: "24px" }}>{chapter.title}</h3>
        </Link>
        <Route
          exact
          path={bookUrl + chapter.url}
          render={() => {
            return <ChapterHome currentUrl={bookUrl + chapter.url} />;
          }}
        />
        {chapter.questions && chapter.questions.map((question, index) => {
          return (
            <Route
              path={bookUrl + chapter.url + "/q" + (index + 1)}
              render={() => (
                <Question
                  baseUrl={bookUrl + chapter.url}
                  index={index + 1}
                  question={question}
                  numberOfQuestions={chapter.questions.length}
                />
              )}
            />
          );
        })}
        {!chapter.questions &&
          <div>
            <p>
              There are currently no questions for this chapter :(,
              but you can change that!
            </p>

            <p>
              Feel free to submit a
              pull request to this project <a href="https://github.com/austintackaberry/ydkjs-exercises">here</a>.
            </p>
          </div>
        }
      </div>
    );
  }
}

export default ChapterRouter;
