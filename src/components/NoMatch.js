import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BookHome extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Ooops</h1>
        <p>{`Looks like this page doesn't exist`}</p>
        <Link to="/">Go to Home page</Link>
      </React.Fragment>
    );
  }
}

export default BookHome;
