import styled from 'styled-components';
import bgs from '../styles/bgs';
import shapes from '../styles/shapes';
import clean from '../styles/clean';
import shadows from '../styles/shadows';

export default styled('button')`
  ${clean}
  ${bgs.dark}
  ${shapes.narrow}
  ${shadows.simple}
  transition: .2s;
  &:hover {
    cursor: pointer;
    ${bgs.darkLight}
  }
`;
