import styled from 'styled-components';
import bgs from '../../styles/bgs';
import shapes from '../../styles/shapes';
import shadows from '../../styles/shadows';
import states from '../../styles/states';

export default styled('input')`
  ${bgs.dark}
  ${shapes.narrow}
  ${shapes.fill}
  ${shadows.simple}
  ${states.focused([bgs.darkLight, shadows.pop])}
`;
