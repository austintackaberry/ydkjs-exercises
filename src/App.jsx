import React, { Component } from "react";
import UpGoing from "./components/UpGoing/UpGoing";
import Home from "./components/Home";
import UpGoingCh1 from "./components/UpGoing/UpGoingCh1.jsx";
import UpGoingCh2 from "./components/UpGoing/UpGoingCh2.jsx";
import UpGoingCh3 from "./components/UpGoing/UpGoingCh3.jsx";

import { Route, Link } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          <h1 style={{ fontSize: "55px" }}>YDKJS EXERCISES</h1>
        </Link>
        <Route exact path="/" component={Home} />
        <Route exact path="/up-going" component={UpGoing} />
        <Route path="/up-going/ch1" component={UpGoingCh1} />
        <Route path="/up-going/ch2" component={UpGoingCh2} />
        <Route path="/up-going/ch3" component={UpGoingCh3} />
      </div>
    );
  }
}

export default App;
