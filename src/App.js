import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import BookRouter from './components/BookRouter';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import books from './data';
import Header from './components/Header';
import Footer from './components/Footer';
import NoMatch from './components/NoMatch';
import { Switch, Route } from 'react-router-dom';
import { mergeScores } from './helpers/helpers';

import { ScoreContext, score } from './score-context';

const AppGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 1fr auto 1fr;
  grid-template-areas:
    'sidebar header'
    'sidebar main'
    'sidebar footer';
  grid-gap: 0.5rem;
  height: 100%;
  overflow-x: hidden;
`;

const MainContentGridChild = styled.div`
  grid-area: main;
  text-align: center;
  min-height: 60vh;
  width: 100%;
  transition: 0.2s cubic-bezier(0.03, 0.86, 0.59, 0.45);
`;

class App extends Component {
  constructor() {
    super();

    const isNarrowScreen = window.innerHeight > window.innerWidth;
    const shouldShowSidebar = !isNarrowScreen;
    // updateScore needs to be defined here, not in score-context.js
    // because it needs to setState
    this.updateScore = newScore => {
      window.localStorage.setItem('score', JSON.stringify(newScore));
      this.setState({ score: newScore });
    };
    this.handleResize = this.handleResize.bind(this);

    this.state = {
      score,
      shouldShowSidebar,
      isNarrowScreen,
      showInstallBtn: false,
    };
  }
  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
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

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleResize);
  };

  handleResize() {
    this.setState({
      isNarrowScreen: window.innerHeight > window.innerWidth,
    });
  }

  handleSidebarToggle(event) {
    const { shouldShowSidebar } = this.state;
    console.log('ouch');
    this.setState({
      shouldShowSidebar: !shouldShowSidebar,
    });
  }

  render() {
    return (
      <ScoreContext.Provider
        value={{ score: this.state.score, updateScore: this.updateScore }}
      >
        <div id="overlay">
          <AppGrid name="App">
            <Sidebar
              name="Sidebar"
              books={books}
              score={this.state.score}
              updateScore={this.updateScore}
              isNarrowScreen={this.state.isNarrowScreen}
              shouldShow={this.state.shouldShowSidebar}
              onMenuClick={e => this.handleSidebarToggle(e)}
              ref={this.sidebarRef}
            />
            <Header />
            <MainContentGridChild
              name="Main"
              sidebar={this.state.shouldShowSidebar}
            >
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
        </div>
      </ScoreContext.Provider>
    );
  }
}

export default App;
