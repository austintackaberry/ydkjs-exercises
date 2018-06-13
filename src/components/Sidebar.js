import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List, ListItem } from 'material-ui/List';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    const debugCurrentScore =
      this.props.score.reduce((acc, book) => acc + book.getAnswered(), 0) || 0;
    const debugTotalScore = this.props.score.reduce(
      (acc, book) => acc + book.getPossible(),
      0
    );

    const debugScoreDisplay = `You've answered ${debugCurrentScore} of ${debugTotalScore} questions correctly. Time to dive in!`;

    return (
      <div className="sidebar">
        <MuiThemeProvider>
          <List style={{ width: '80%', margin: '0 auto' }}>
            <ListItem
              style={{ fontSize: '12px', lineHeight: '12px' }}
              primaryText={debugScoreDisplay}
            />
          </List>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Sidebar;
