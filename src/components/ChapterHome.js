import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class ChapterHome extends Component {
  render() {
    const { currentUrl } = this.props;
    return <Redirect to={currentUrl + '/q1'} />;
  }
}

export default ChapterHome;
