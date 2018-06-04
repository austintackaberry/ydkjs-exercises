import React, { Component } from "react";
import BookRouter from "./components/BookRouter";
import Home from "./components/Home";
import books from "./data";
import Footer from "./components/Footer";
import NoMatch from "./components/NoMatch";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";

import { ScoreContext, score } from "./score-context";

class App extends Component {
  constructor() {
    super();
    this.updateScore = newScore => {
      this.setState({ score: newScore });
    };

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      score: [...score],
      updateScore: this.updateScore
    };
  }
  render() {
    return (
      <ScoreContext.Provider value={this.state}>
        <div className="App">
          <div className="main-content">
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              <h1 style={{ fontSize: "55px" }}>YDKJS EXERCISES</h1>
            </Link>
            <Switch>
              <Route exact path="/" render={() => <Home books={books} />} />
              {books.map((book, index) => {
                book.id = index;
                return (
                  <Route
                    key={index}
                    path={book.url}
                    render={() => <BookRouter book={book} />}
                  />
                );
              })}
              <Route component={NoMatch} />
            </Switch>
          </div>
          <Footer />
        </div>
      </ScoreContext.Provider>
    );
  }
}

export default App;
