import React, { Component } from "react";
import BookRouter from "./components/UpGoing/BookRouter";
import Home from "./components/Home";

import { Route, Link } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    const books = [
      { url: "/up-going", name: "Up & Going", id: "upGoing" },
      { url: "/scope-closures", name: "Scope & Closures", id: "scopeClosures" },
      {
        url: "/this-object-prototypes",
        name: "this & Object Prototypes",
        id: "thisObjectPrototypes"
      },
      { url: "/types-grammar", name: "Types & Grammar", id: "typesGrammar" },
      {
        url: "/async-performance",
        name: "Async & Performance",
        id: "asyncPerformance"
      },
      { url: "/es6-beyond", name: "ES6 & Beyond", id: "es6Beyond" }
    ];
    return (
      <div className="App">
        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          <h1 style={{ fontSize: "55px" }}>YDKJS EXERCISES</h1>
          <Route exact path="/" render={() => <Home books={books} />} />
        </Link>
        {books.map(book => {
          return (
            <Route path={book.url} render={() => <BookRouter book={book} />} />
          );
        })}
      </div>
    );
  }
}

export default App;
