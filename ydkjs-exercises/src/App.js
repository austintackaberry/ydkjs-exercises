import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {List, ListItem} from 'material-ui/List';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>YDKJS EXERCISES</h1>
        <MuiThemeProvider>
          <List>
            <ListItem primaryText="Up & Going" />
            <ListItem primaryText="Scope & Closures"/>
            <ListItem primaryText="this & Object Prototypes" />
            <ListItem primaryText="Types & Grammar" />
            <ListItem primaryText="Async & Performance" />
            <ListItem primaryText="ES6 & Beyond" />
          </List>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
