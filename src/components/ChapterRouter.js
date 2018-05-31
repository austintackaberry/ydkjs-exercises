import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import NoMatch from './NoMatch';
import ChapterHome from "./ChapterHome";
import Question from "./Question";
import NoQuestions from "./NoQuestions";


class ChapterRouter extends Component {
  render() {
    const { chapter, bookUrl } = this.props;

    let displayQuestions;
    if (chapter.questions) {
      displayQuestions = chapter.questions.map((question, index) => {
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
        )
      });
    } else {
      displayQuestions = (
        <NoQuestions/>
      );
    }

    return (
      <div>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={bookUrl + chapter.url}
        >
          <h3 style={{ fontSize: "24px" }}>{chapter.title}</h3>
        </Link>
        <Switch>
          <Route
            exact
            path={bookUrl + chapter.url}
            render={() => {
              return <ChapterHome currentUrl={bookUrl + chapter.url} />;
            }}
          />
          {displayQuestions}
          <Route component={NoMatch}/>
        </Switch>
      </div>
    );
  }
}

export default ChapterRouter;
