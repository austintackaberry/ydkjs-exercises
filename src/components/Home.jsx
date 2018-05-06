import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { List, ListItem } from "material-ui/List";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    const { books } = this.props;
    return (
      <div className="page">
        <MuiThemeProvider>
          <List style={{ width: "40%", margin: "0 auto" }}>
            {books.map(book => (
              <Link style={{ textDecoration: "none" }} to={book.url}>
                <ListItem
                  style={{ fontSize: "30px" }}
                  primaryText={book.name}
                />
              </Link>
            ))}
          </List>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Home;
