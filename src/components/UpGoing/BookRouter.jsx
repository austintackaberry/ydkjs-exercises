import React, { Component } from "react";
import UpGoing from "./UpGoing.jsx";
import UpGoingCh1 from "./UpGoingCh1.jsx";
import UpGoingCh2 from "./UpGoingCh2.jsx";
import UpGoingCh3 from "./UpGoingCh3.jsx";
import { Route, Link } from "react-router-dom";

class BookRouter extends Component {
  render() {
    const { book } = this.props;
    return (
      <div>
        <Link style={{ textDecoration: "none", color: "black" }} to={book.url}>
          <h2 style={{ fontSize: "40px" }}>{book.name}</h2>
        </Link>
        <Route exact path={book.url} component={UpGoing} />
        <Route path={book.url + "/ch1"} component={UpGoingCh1} />
        <Route path={book.url + "/ch2"} component={UpGoingCh2} />
        <Route path={book.url + "/ch3"} component={UpGoingCh3} />
      </div>
    );
  }
}

export default BookRouter;
