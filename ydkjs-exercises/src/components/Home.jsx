import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List, ListItem } from 'material-ui/List';
import { Route, Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <List style={{ width: '30%', margin: '0 auto' }}>
            <Link to="/upgoing">
              <ListItem primaryText="Up & Going" />
            </Link>

            <ListItem primaryText="Scope & Closures" />
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

export default Home;
