import React, { Component } from "react";
import BookRouter from "./components/BookRouter";
import Home from "./components/Home";
import books from "./data";
import Footer from "./components/Footer";
import NoMatch from './components/NoMatch';
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main-content">
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            <h1 style={{ fontSize: "55px" }}>YDKJS EXERCISES</h1>
          </Link>
          <Switch>
            <Route exact path="/" render={() => <Home books={books} />} />
              {books.map(book => {
                return (
                  <Route
                    key={book.id}
                    path={book.url}
                    render={() => <BookRouter book={book} />}
                  />
                );
              })}
            <Route component={NoMatch} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
