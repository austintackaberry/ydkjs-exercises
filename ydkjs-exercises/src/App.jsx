import React, { Component } from 'react';
import UpGoing from './components/UpGoing';
import Home from './components/Home';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import { Route, Link } from 'react-router-dom';
import './App.css';

const firstChild = (props) => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link style={{ textDecoration: 'none', color: 'black' }} to="/">
          <h1 style={{ fontSize: '55px' }}>YDKJS EXERCISES</h1>
        </Link>
        <Route
          exact
          path="/"
          children={({ match, ...rest }) => (
            <TransitionGroup component={firstChild}>{match && <Home {...rest} />}</TransitionGroup>
          )}
        />
        <Route
          path="/up-going"
          children={({ match, ...rest }) => (
            <TransitionGroup component={firstChild}>
              {match && <UpGoing {...rest} />}
            </TransitionGroup>
          )}
        />
      </div>
    );
  }
}

export default App;
