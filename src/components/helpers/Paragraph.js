import React from 'react';

export default class Paragraph extends React.PureComponent {
  render() {
    console.log(this.props);
    return (
      <p
        style={{
          display: 'inline-block',
          margin: '0',
          height: 'auto',
          lineHeight: '22px',
        }}
      >
        {this.props.children}
      </p>
    );
  }
}
