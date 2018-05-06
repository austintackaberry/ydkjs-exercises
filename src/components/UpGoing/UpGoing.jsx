import React, { Component } from "react";
import { Link } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { List, ListItem } from "material-ui/List";

class UpGoing extends Component {
  render() {
    const { match } = this.props;

    const upGoingChList = [
      {
        number: 1,
        title: "Chapter 1: Into Programming"
      },
      {
        number: 2,
        title: "Chapter 2: Into JavaScript"
      },
      {
        number: 3,
        title: "Chapter 3: Into YDKJS"
      }
    ];

    return (
      <div className="UpGoing">
        <MuiThemeProvider>
          <List style={{ width: "40%", margin: "0 auto", textAlign: "left" }}>
            {upGoingChList.map(chapter => (
              <Link
                style={{ textDecoration: "none" }}
                to={match.url + "/ch" + chapter.number}
              >
                <ListItem
                  style={{ fontSize: "30px" }}
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

export default UpGoing;
