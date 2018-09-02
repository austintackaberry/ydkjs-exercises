import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Toggle extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
  };

  state = { show: this.props.show };

  handleToggle() {
    const { updaters } = this.props;
    this.setState(prevState => {
      updaters && updaters.forEach(updater => updater());
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
