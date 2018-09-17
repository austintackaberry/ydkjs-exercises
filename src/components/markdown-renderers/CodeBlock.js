import React from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightEighties } from 'react-syntax-highlighter/styles/hljs';

export default class CodeBlock extends React.PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string,
  };

  static defaultProps = {
    language: null,
  };

  render() {
    const { language, value } = this.props;

    return (
      <SyntaxHighlighter
        style={tomorrowNightEighties}
        customStyle={{
          borderRadius: '0.25em',
          textAlign: 'left',
          padding: '0.6em 2em calc(0.6em + 1px)',
        }}
        language={language}
      >
        {value}
      </SyntaxHighlighter>
    );
  }
}
