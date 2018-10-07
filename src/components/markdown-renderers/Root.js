import React from 'react';
import styled from 'styled-components';

const StyledSpan = styled.span`
  display: inline-block;
`;

export default class Root extends React.PureComponent {
  render() {
    return <StyledSpan>{this.props.children}</StyledSpan>;
  }
}
