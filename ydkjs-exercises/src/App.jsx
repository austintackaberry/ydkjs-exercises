import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List, ListItem } from 'material-ui/List';
import './App.css';

const App = () => (
  <div className="App">
    <div>
      <h1>YDKJS EXERCISES</h1>
      <MuiThemeProvider>
        <List style={{ width: '30%', margin: '0 auto' }}>
          <ListItem primaryText="Up & Going" />
          <ListItem primaryText="Scope & Closures" />
          <ListItem primaryText="this & Object Prototypes" />
          <ListItem primaryText="Types & Grammar" />
          <ListItem primaryText="Async & Performance" />
          <ListItem primaryText="ES6 & Beyond" />
        </List>
      </MuiThemeProvider>
    </div>
  </div>
);

export default App;
