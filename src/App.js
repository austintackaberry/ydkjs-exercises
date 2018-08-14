import React, { Component } from 'react';
import BookRouter from './components/BookRouter';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import books from './data';
import Footer from './components/Footer';
import NoMatch from './components/NoMatch';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import { mergeScores } from './helpers/helpers';

import { ScoreContext, score } from './score-context';

class App extends Component {
  constructor() {
    super();

    // updateScore needs to be defined here, not in score-context.js
    // because it needs to setState
    this.updateScore = newScore => {
      window.localStorage.setItem('score', JSON.stringify(newScore));
      this.setState({ score: newScore });
    };

    this.state = {
      score,
    };
  }
  componentDidMount() {
    let lsScore = window.localStorage.getItem('score');
    let score = this.state.score;
    if (lsScore) {
      lsScore = JSON.parse(lsScore);
      score = mergeScores({
        lsScore,
        newScore: this.state.score,
      });
    }
    this.setState({ score });
  }

  render() {
    return (
      <ScoreContext.Provider
        value={{ score: this.state.score, updateScore: this.updateScore }}
      >
        <div className="App">
          <Sidebar
            books={books}
            score={this.state.score}
            updateScore={this.updateScore}
          />
          <div className="main-content">
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/">
              <h1 style={{ fontSize: '55px' }}>YDKJS EXERCISES</h1>
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
