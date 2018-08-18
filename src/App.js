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
import MenuContainer from './components/MenuContainer';

class App extends Component {
  constructor() {
    super();

    const isNarrowScreen = window.innerWidth < 500;
    const shouldShowSidebar = !isNarrowScreen;
    this.sidebarRef = React.createRef();
    // updateScore needs to be defined here, not in score-context.js
    // because it needs to setState
    this.updateScore = newScore => {
      window.localStorage.setItem('score', JSON.stringify(newScore));
      this.setState({ score: newScore });
    };

    this.state = {
      score,
      shouldShowSidebar,
      isNarrowScreen,
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

  handleMenuClick(event) {
    const { shouldShowSidebar } = this.state;
    this.setState({
      shouldShowSidebar: !shouldShowSidebar,
    });
  }

  handleCloseClick(event) {
    const { shouldShowSidebar } = this.state;
    this.setState({
      shouldShowSidebar: !shouldShowSidebar,
    });
  }

  render() {
    const { shouldShowSidebar, isNarrowScreen } = this.state;
    const backgroundColor =
      shouldShowSidebar && isNarrowScreen
        ? { backgroundColor: 'rgba(0,0,0,0.5)' }
        : {};
    const appMargin =
      this.sidebarRef.current && !isNarrowScreen
        ? {
            marginLeft: this.sidebarRef.current.offsetWidth,
          }
        : {};
    return (
      <ScoreContext.Provider
        value={{ score: this.state.score, updateScore: this.updateScore }}
      >
        <div id="overlay" style={backgroundColor}>
          <div className="App" style={appMargin}>
            {shouldShowSidebar && (
              <Sidebar
                books={books}
                score={this.state.score}
                updateScore={this.updateScore}
                isNarrowScreen={this.state.isNarrowScreen}
                onCloseClick={e => this.handleCloseClick(e)}
                ref={this.sidebarRef}
              />
            )}
            <div className="main-content">
              <MenuContainer
                shouldShowSidebar={this.state.shouldShowSidebar}
                handleMenuClick={e => this.handleMenuClick(e)}
              />
              <Link style={{ textDecoration: 'none', color: 'black' }} to="/">
                <h1 style={{ fontSize: '45px', margin: '10px 0' }}>
                  YDKJS EXERCISES
                </h1>
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
        </div>
      </ScoreContext.Provider>
    );
  }
}

export default App;
