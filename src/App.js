import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import BookRouter from './components/BookRouter';
import Home from './components/Home';
import Toggle from './components/Toggle';
import Sidebar from './components/Sidebar';
import rawBooks from './data';
import Header from './components/Header';
import Footer from './components/Footer';
import NoMatch from './components/NoMatch';
import ResetModal from './components/ResetModal';
import { Switch, Route } from 'react-router-dom';
import { mergeScores, initializeBooks } from './helpers/helpers';

import { ScoreContext, score } from './score-context';
const books = initializeBooks(rawBooks);

const AppGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: minmax(15vh, min-content) 1fr minmax(15vh, min-content);
  grid-template-areas:
    'sidebar header'
    'sidebar main'
    'sidebar footer';
  grid-row-gap: 0.5rem;
  height: 100%;
  overflow-x: hidden;
  overflow-y: ${props =>
    props.shouldShowSidebar && props.isNarrowScreen ? 'hidden' : 'scroll'};
  z-index: 0;

  &:before {
    content: '';
    display: 'block';
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    opacity: ${props =>
      props.shouldShowSidebar && props.isNarrowScreen ? 1 : 0};
    position: absolute;
    width: 100%;
    transition: var(--easing-standard);
    z-index: ${props =>
      props.shouldShowSidebar && props.isNarrowScreen ? 10 : -1};
  }
`;

const MainContentGridChild = styled.div`
  position: relative;
  display: block;
  grid-area: main;
  place-self: start stretch;
  text-align: center;
  transition: var(--easing-standard);
  width: 100%;
`;

class App extends Component {
  constructor() {
    super();

    const isNarrowScreen = window.innerHeight > window.innerWidth;
    // updateScore needs to be defined here, not in score-context.js
    // because it needs to setState
    this.updateScore = newScore => {
      window.localStorage.setItem('score', JSON.stringify(newScore));
      this.setState({ score: newScore });
    };
    this.handleResize = this.handleResize.bind(this);
    this.handleShowReset = this.handleShowReset.bind(this);

    this.state = {
      score,
      isNarrowScreen,
      showInstallBtn: false,
      showReset: false,
    };
  }
  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    let lsScore = window.localStorage.getItem('score');
    let { score } = this.state;
    if (lsScore) {
      lsScore = JSON.parse(lsScore);
      score = mergeScores({
        lsScore,
        newScore: this.state.score,
      });
    }
    this.setState({ score });
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleResize);
  };

  handleResize() {
    this.setState({
      isNarrowScreen: window.innerHeight > window.innerWidth,
    });
  }

  handleShowReset() {
    const { showReset } = this.state;
    this.setState({
      showReset: !showReset,
    });
  }

  render() {
    return (
      <ScoreContext.Provider
        value={{ score: this.state.score, updateScore: this.updateScore }}
      >
        <Toggle show={!this.state.isNarrowScreen}>
          {({ show, toggle }) => (
            <AppGrid
              data-name="App"
              isNarrowScreen={this.state.isNarrowScreen}
              shouldShowSidebar={show}
              onClick={e => {
                e.target.dataset.name === 'App' &&
                  this.state.isNarrowScreen &&
                  show &&
                  toggle();
              }}
            >
              {this.state.showReset && (
                <ResetModal
                  handleShowReset={this.handleShowReset}
                  updateScore={this.updateScore}
                  score={this.state.score}
                />
              )}
              <Sidebar
                data-name="Sidebar"
                books={books}
                score={this.state.score}
                updateScore={this.updateScore}
                handleShowReset={this.handleShowReset}
                isNarrowScreen={this.state.isNarrowScreen}
                shouldShow={show}
                onMenuClick={toggle}
              />
              <Header />
              <MainContentGridChild data-name="Main">
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
              </MainContentGridChild>
              <Footer />
            </AppGrid>
          )}
        </Toggle>
      </ScoreContext.Provider>
    );
  }
}

export default App;
