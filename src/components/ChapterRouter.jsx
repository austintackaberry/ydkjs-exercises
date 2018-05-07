import React, { Component } from "react";
import { Link } from "react-router-dom";

class ChapterRouter extends Component {
  render() {
    const { chapter, bookUrl } = this.props;
    return (
      <div>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={bookUrl + chapter.url}
        >
          <h3 style={{ fontSize: "24px" }}>{chapter.title}</h3>
        </Link>
        <p>hey</p>
      </div>
    );
  }
}

export default ChapterRouter;
