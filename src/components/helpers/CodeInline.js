import React from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightEighties } from 'react-syntax-highlighter/styles/hljs';

export default class CodeInline extends React.PureComponent {
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
        customStyle={{ display: 'inline', padding: '0.3em' }}
        language={language}
      >
        {value}
      </SyntaxHighlighter>
    );
  }
}
