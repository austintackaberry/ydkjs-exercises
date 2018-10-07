import React, { Component } from 'react';
import Menu from '../svgs/Menu';
import styled from 'styled-components';

const StyledDiv = styled.div`
  text-align: left;
  margin: 10px 0 0 10px;
`;

class MenuContainer extends Component {
  handleClick(event) {
    const { handleMenuClick } = this.props;
    handleMenuClick(event);
  }

  render() {
    const { shouldShowSidebar } = this.props;
    return (
      <React.Fragment>
        {!shouldShowSidebar && (
          <StyledDiv
            onClick={e => {
              this.handleClick(e);
            }}
          >
            <Menu />
          </StyledDiv>
        )}
      </React.Fragment>
    );
  }
}

export default MenuContainer;
