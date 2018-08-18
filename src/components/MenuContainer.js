import React, { Component } from 'react';
import Menu from '../svgs/Menu';

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
          <div
            style={{ textAlign: 'left', margin: '10px 0 0 10px' }}
            onClick={e => {
              this.handleClick(e);
            }}
          >
            <Menu />
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default MenuContainer;
