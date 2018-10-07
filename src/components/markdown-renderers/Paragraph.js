import React from 'react';
import styled from 'styled-components';

const StyledParagraph = styled.p`
  display: inline-block;
  margin: 0;
  height: auto;
  line-height: 1.7;
`;

export default class Paragraph extends React.PureComponent {
  render() {
    return <StyledParagraph>{this.props.children}</StyledParagraph>;
  }
}
