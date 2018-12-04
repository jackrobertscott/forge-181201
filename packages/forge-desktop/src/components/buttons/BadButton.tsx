import styled from 'styled-components';
import bgs from '../../styles/bgs';
import shapes from '../../styles/shapes';
import shadows from '../../styles/shadows';
import states from '../../styles/states';

export default styled('button')`
  ${bgs.danger}
  ${shapes.narrow}
  ${shadows.simple}
  ${states.clickable(bgs.dangerLight)}
  ${states.clicked([bgs.danger, shadows.none])}
`;
