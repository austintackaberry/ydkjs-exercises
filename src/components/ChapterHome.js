import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

class ChapterHome extends Component {
  static propTypes = {
    currentUrl: PropTypes.string.isRequired,
  };
  render() {
    const { currentUrl } = this.props;
    return <Redirect to={`${currentUrl}/q1`} />;
  }
}

export default ChapterHome;
