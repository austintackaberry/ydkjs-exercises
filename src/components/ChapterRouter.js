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
    let chapterPath = bookUrl + chapter.url;

    if (chapter.questions) {
      displayQuestions = chapter.questions.map((question, index) => {

        let questionPath = chapterPath + "/q" + (index + 1);

        return (
          <div key={questionPath}>
            <Route 
              path={questionPath}
              render={() => (
                <Question
                  baseUrl={chapterPath}
                  index={index + 1}
                  question={question}
                  numberOfQuestions={chapter.questions.length}
                />
              )}
            />
          </div>
        )
      });
    } else {
      displayQuestions = (
        <NoQuestions/>
      );
    }

    return (
      <div key={chapterPath}>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={chapterPath}
        >
          <h3 style={{ fontSize: "24px" }}>{chapter.title}</h3>
        </Link>
        <Switch>
          <Route
            exact
            path={chapterPath}
            render={() => {
              return <ChapterHome currentUrl={chapterPath} />;
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
