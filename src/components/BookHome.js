import React, { Component } from "react";
import { Link } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { List, ListItem } from "material-ui/List";

class BookHome extends Component {
  render() {
    const { book } = this.props;

    return (
      <div className="UpGoing">
        <MuiThemeProvider>
          <List style={{ width: "40%", margin: "0 auto", textAlign: "center" }}>
            {book.chapters.map(chapter => (
              <Link
                key={book.id+chapter.url}
                style={{ textDecoration: "none" }}
                to={book.url + chapter.url}
              >
                <ListItem
                  style={{ fontSize: "25px", lineHeight: "25px" }}
                  primaryText={chapter.title}
                />
              </Link>
            ))}
          </List>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default BookHome;
