import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

class ChapterHome extends Component {
  render() {
    const { currentUrl } = this.props;
    return <Redirect to={currentUrl + '/q1'} />;
  }
}

ChapterHome.propTypes = {
  currentUrl: PropTypes.string.isRequired,
};

export default ChapterHome;
