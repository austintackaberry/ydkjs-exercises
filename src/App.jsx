import React, { Component } from 'react';
import UpGoing from './components/UpGoing';
import Home from './components/Home';

import { Route, Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link style={{ textDecoration: 'none', color: 'black' }} to="/">
          <h1 style={{ fontSize: '55px' }}>YDKJS EXERCISES</h1>
        </Link>
        <Route exact path="/" component={Home} />
        <Route path="/up-going" component={UpGoing} />
      </div>
    );
  }
}

export default App;
