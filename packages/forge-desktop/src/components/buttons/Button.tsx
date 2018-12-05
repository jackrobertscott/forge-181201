import styled from 'styled-components';
import bgs from '../../styles/bgs';
import shapes from '../../styles/shapes';
import shadows from '../../styles/shadows';
import states from '../../styles/states';

export default styled('button')`
  ${bgs.dark}
  ${shapes.narrow}
  ${shadows.simple}
  ${states.hovered(bgs.darkLight)}
  ${states.clicked([bgs.dark, shadows.none])}
`;
