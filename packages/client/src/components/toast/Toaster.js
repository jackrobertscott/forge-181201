import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ToasterContext from './ToasterContext';
import Portal from './Portal';
import Container from './Container';
import Toast from './Toast';

export default class Toaster extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    timeout: PropTypes.number,
    toast: PropTypes.func,
    toastContainer: PropTypes.func,
  };

  static defaultProps = {
    timeout: 4000,
    toast: null,
    toastContainer: null,
  };

  constructor(...args) {
    super(...args);
    this.dochook = document.createElement('div');
    this.state = {
      toasts: new Map(),
    };
  }

  componentDidMount() {
    document.body.appendChild(this.dochook);
  }

  componentWillUnmount() {
    document.body.removeChild(this.dochook);
  }

  addToast = toast => {
    const id = Math.random()
      .toString(36)
      .substr(3);
    const { toasts } = this.state;
    this.setState({
      toasts: toasts.set(id, toast),
    });
    const { timeout } = this.props;
    if (timeout) {
      setTimeout(() => this.removeToast(id), timeout);
    }
    return id;
  };

  removeToast = id => {
    const { toasts } = this.state;
    toasts.delete(id);
    this.setState({ toasts });
  };

  render() {
    const { toasts } = this.state;
    const { children, toast, toastContainer } = this.props;
    const ToastComponent = toast || Toast;
    const ToastContainerComponent = toastContainer || Container;
    return (
      <Fragment>
        <ToasterContext.Provider
          value={{
            addToast: this.addToast,
            removeToast: this.removeToast,
          }}
        >
          {children}
        </ToasterContext.Provider>
        <Portal>
          <ToastContainerComponent>
            {[...toasts.entries()].map(([id, args]) => (
              <ToastComponent
                key={id}
                close={() => this.removeToast(id)}
                {...args}
              />
            ))}
          </ToastContainerComponent>
        </Portal>
      </Fragment>
    );
  }
}
