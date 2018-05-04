import React, { Component } from "react";
import UpGoingCh1 from "./UpGoingCh1.jsx";
import UpGoingCh2 from "./UpGoingCh2.jsx";
import UpGoingCh3 from "./UpGoingCh3.jsx";
import { Route, Link } from "react-router-dom";

class UpGoingRouter extends Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        <Link style={{ textDecoration: "none", color: "black" }} to="/up-going">
          <h2 style={{ fontSize: "40px" }}>Up & Going</h2>
        </Link>
        <Route path={match.url + "/ch1"} component={UpGoingCh1} />
        <Route path={match.url + "/ch2"} component={UpGoingCh2} />
        <Route path={match.url + "/ch3"} component={UpGoingCh3} />
      </div>
    );
  }
}

export default UpGoingRouter;
