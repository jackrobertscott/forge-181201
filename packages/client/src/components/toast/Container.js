import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrap = styled.div`
  padding: 20px;
  position: fixed;
  z-index: 100;
  bottom: 0;
  right: 0;
`;

const Toast = ({ children }) => <Wrap>{children}</Wrap>;

Toast.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Toast;
