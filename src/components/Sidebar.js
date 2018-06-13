import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List } from 'material-ui/List';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className={this.props.show ? 'Sidebar-show' : 'Sidebar-hidden'}>
        <MuiThemeProvider>
          <List style={{ width: '40%', margin: '0 auto' }}>
            <button onClick={e => this.props.toggle(e)}>
              {this.props.show ? 'Hide' : 'Show'}
            </button>
          </List>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Sidebar;
