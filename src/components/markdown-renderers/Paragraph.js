import React from 'react';

export default class Paragraph extends React.PureComponent {
  render() {
    return (
      <p
        style={{
          display: 'inline-block',
          margin: '0',
          height: 'auto',
          lineHeight: '1.7',
        }}
      >
        {this.props.children}
      </p>
    );
  }
}
