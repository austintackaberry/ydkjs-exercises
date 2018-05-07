import React, { Component } from "react";
import BookRouter from "./components/BookRouter";
import Home from "./components/Home";

import { Route, Link } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    const books = [
      {
        url: "/up-going",
        title: "Up & Going",
        id: "upGoing",
        chapters: [
          {
            number: 1,
            title: "Chapter 1: Into Programming",
            url: "/ch1"
          },
          {
            number: 2,
            title: "Chapter 2: Into JavaScript",
            url: "/ch2"
          },
          {
            number: 3,
            title: "Chapter 3: Into YDKJS",
            url: "/ch3"
          }
        ]
      },
      {
        url: "/scope-closures",
        title: "Scope & Closures",
        id: "scopeClosures"
      },
      {
        url: "/this-object-prototypes",
        title: "this & Object Prototypes",
        id: "thisObjectPrototypes"
      },
      { url: "/types-grammar", title: "Types & Grammar", id: "typesGrammar" },
      {
        url: "/async-performance",
        title: "Async & Performance",
        id: "asyncPerformance"
      },
      { url: "/es6-beyond", title: "ES6 & Beyond", id: "es6Beyond" }
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
