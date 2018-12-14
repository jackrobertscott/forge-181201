import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import bgs from '../../styles/bgs';
import shapes from '../../styles/shapes';
import words from '../../styles/words';
import colors from '../../styles/colors';

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(150%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`;

const Wrap = styled.div`
  ${bgs.darkLighter}
  ${shapes.simple}
  width: 300px;
  margin-top: 10px;
  ${({ type }) =>
    type === 'error' &&
    css`
      border-left: 5px solid ${colors.dangerLighter};
    `};
  opacity: 0;
  transform: translateY(150%);
  animation: 0.5s forwards ${slideIn};
`;

const Top = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const Label = styled.div`
  ${bgs.dark}
  ${shapes.simple}
  ${shapes.mini}
  ${words.small}
`;

const Close = styled.div`
  margin-left: auto;
  cursor: pointer;
  font-family: monospace;
`;

const Contents = styled.div`
  ${words.multiline}
  white-space: pre-wrap;
`;

const Toast = ({ close, contents, type, ...props }) => {
  let label;
  switch (type) {
    case 'error':
      label = 'Error';
      break;
    default:
      label = 'Alert';
      break;
  }
  return (
    <Wrap {...props} type={type}>
      <Top>
        <Label>{label}</Label>
        <Close onClick={close}>X</Close>
      </Top>
      <Contents>{contents.replace('GraphQL error: ', '')}</Contents>
    </Wrap>
  );
};

Toast.propTypes = {
  close: PropTypes.func.isRequired,
  contents: PropTypes.string.isRequired,
};

export default Toast;
