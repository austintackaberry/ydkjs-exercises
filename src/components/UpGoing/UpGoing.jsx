import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { List, ListItem } from "material-ui/List";

class UpGoing extends Component {
  render() {
    return (
      <div className="UpGoing">
        <MuiThemeProvider>
          <List style={{ width: "30%", margin: "0 auto" }}>
            {[1, 2, 3].map(chapter => (
              <Link
                style={{ textDecoration: "none" }}
                to={"/up-going/ch" + chapter}
              >
                <ListItem
                  style={{ fontSize: "30px" }}
                  primaryText={"ch" + chapter}
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
