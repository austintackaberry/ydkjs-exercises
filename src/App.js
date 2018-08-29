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
      showInstallBtn: false,
      deferredPrompt: null,
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

    window.addEventListener('beforeinstallprompt', e => {
      this.setState({ showInstallBtn: true });
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.setState({ deferredPrompt: e });
    });
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

  handlePwaInstallClick(event) {
    // hide our user interface that shows our A2HS button
    this.setState({ showInstallBtn: false });
    const { deferredPrompt } = this.state;
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then(choiceResult => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      this.setState({ deferredPrompt: null });
    });
  }

  render() {
    const { shouldShowSidebar, isNarrowScreen, showInstallBtn } = this.state;
    const overlayStyle =
      shouldShowSidebar && isNarrowScreen
        ? { backgroundColor: 'rgba(0,0,0,0.5)' }
        : {};
    const appMargin =
      this.sidebarRef.current && !isNarrowScreen
        ? {
            marginLeft: this.sidebarRef.current.offsetWidth,
          }
        : {};
    const mainContentStyle =
      shouldShowSidebar && isNarrowScreen ? { pointerEvents: 'none' } : {};

    const pwaInstallBtnStyle = showInstallBtn ? {} : { display: 'none' };
    return (
      <ScoreContext.Provider
        value={{ score: this.state.score, updateScore: this.updateScore }}
      >
        <div id="overlay" style={overlayStyle}>
          <div className="App" style={appMargin}>
            <button
              onClick={e => this.handlePwaInstallClick(e)}
              style={pwaInstallBtnStyle}
            />
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
            <div className="main-content" style={mainContentStyle}>
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
