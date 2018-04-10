import React, { Component } from 'react';
import AnimatedWrapper from './AnimatedWrapper';

class UpGoingComponent extends Component {
  render() {
    return <p className="page">hello</p>;
  }
}

const UpGoing = AnimatedWrapper(UpGoingComponent);
export default UpGoing;
