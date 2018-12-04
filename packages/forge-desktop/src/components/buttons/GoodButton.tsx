import styled from 'styled-components';
import bgs from '../styles/bgs';
import shapes from '../styles/shapes';
import shadows from '../styles/shadows';
import states from '../styles/states';

export default styled('button')`
  ${bgs.marine}
  ${shapes.narrow}
  ${shadows.simple}
  ${states.clickable(bgs.marineLight)}
  ${states.clicked([bgs.marine, shadows.none])}
`;
