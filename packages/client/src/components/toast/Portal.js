import { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Portal extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  constructor(...args) {
    super(...args);
    this.dochook = document.createElement('div');
  }

  componentDidMount() {
    document.body.appendChild(this.dochook);
  }

  componentWillUnmount() {
    document.body.removeChild(this.dochook);
  }

  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(children, this.dochook);
  }
}
