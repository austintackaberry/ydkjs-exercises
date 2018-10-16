import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Toggle extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    show: PropTypes.bool,
  };

  state = { show: this.props.show || false };

  handleToggle() {
    this.setState(prevState => {
      return {
        show: !prevState.show,
      };
    });
  }

  render() {
    const { children } = this.props;
    const toggle = () => this.handleToggle();
    return children({ show: this.state.show, toggle });
  }
}
