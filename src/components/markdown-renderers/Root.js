import React from 'react';

export default class Root extends React.PureComponent {
  render() {
    return (
      <span style={{ display: 'inline-block' }}>{this.props.children}</span>
    );
  }
}
