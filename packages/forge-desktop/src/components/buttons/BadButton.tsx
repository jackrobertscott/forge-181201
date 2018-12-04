import styled from 'styled-components';
import bgs from '../styles/bgs';
import shapes from '../styles/shapes';
import shadows from '../styles/shadows';

export default styled('button')`
  ${bgs.danger}
  ${shapes.narrow}
  ${shadows.simple}
  transition: .2s;
  &:hover {
    cursor: pointer;
    ${bgs.dangerLight}
  }
`;
