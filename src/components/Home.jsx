import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { List, ListItem } from "material-ui/List";
import { Route, Link } from "react-router-dom";

class Home extends Component {
  render() {
    const chapters = [
      { url: "/up-going", name: "Up & Going" },
      { url: "/scope-closures", name: "Scope & Closures" },
      { url: "/this-object-prototypes", name: "this & Object Prototypes" },
      { url: "/types-grammar", name: "Types & Grammar" },
      { url: "/async-performance", name: "Async & Performance" },
      { url: "/es6-beyond", name: "ES6 & Beyond" }
    ];
    return (
      <div className="page">
        <MuiThemeProvider>
          <List style={{ width: "40%", margin: "0 auto" }}>
            {chapters.map(chapter => (
              <Link style={{ textDecoration: "none" }} to={chapter.url}>
                <ListItem
                  style={{ fontSize: "30px" }}
                  primaryText={chapter.name}
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
