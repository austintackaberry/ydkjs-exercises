import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { Link } from 'react-router-dom';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    const books = this.props.books;
    const score = this.props.score;
    const currentScore = score.current;
    const possibleScore = score.possible;

    const scoreDisplay = `You've answered ${currentScore} of ${possibleScore} questions correctly. Time to dive in!`;

    return (
      <div className="sidebar">
        <MuiThemeProvider>
          <List style={{ width: '100%', margin: '0 auto' }}>
            <ListItem
              style={{
                fontSize: '16px',
                fontWeight: 'bold',
                lineHeight: '16px',
              }}
              primaryText="Progress"
            />
            <ListItem
              style={{ fontSize: '12px', lineHeight: '12px' }}
              primaryText={scoreDisplay}
            />
          </List>

          <Divider />

          <List style={{ width: '100%', margin: '0 auto' }}>
            <ListItem
              style={{
                fontSize: '16px',
                fontWeight: 'bold',
                lineHeight: '16px',
              }}
              primaryText="Books"
            />
            {books.map(book => (
              <Link
                key={book.id}
                style={{ textDecoration: 'none' }}
                to={book.url}
              >
                <ListItem
                  style={{ fontSize: '12px', lineHeight: '12px' }}
                  primaryText={`${book.title} (${
                    score.books[book.id].current
                  }/${score.books[book.id].possible})`}
                />
              </Link>
            ))}
          </List>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Sidebar;
