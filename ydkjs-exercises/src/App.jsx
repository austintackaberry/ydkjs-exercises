import React, { Component } from 'react';
import UpGoing from './components/UpGoing';
import Home from './components/Home';

import { Route, Link } from 'react-router-dom';
import './App.css';

const App = () => (
  <div className="App">
    <Link to="/">
      <h1>YDKJS EXERCISES</h1>
    </Link>
    <Route exact path="/" component={Home} />
    <Route path="/upgoing" component={UpGoing} />
  </div>
);

export default App;
