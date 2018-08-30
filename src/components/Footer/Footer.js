import React, { Component } from 'react';
import { FooterGridChild } from './styled';

class Footer extends Component {
  render() {
    return (
      <FooterGridChild data-name="Footer">
        <p>
          {' '}
          YDKJS Exercises is created and maintained by learners like you! To
          take a look at the source code or contribute to the project, check out
          the repository at{' '}
          <a href="https://github.com/austintackaberry/ydkjs-exercises">
            {' '}
            https://github.com/austintackaberry/ydkjs-exercises
          </a>
        </p>
      </FooterGridChild>
    );
  }
}

export default Footer;
