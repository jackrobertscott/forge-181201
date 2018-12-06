import styled from 'styled-components';
import bgs from '../../styles/bgs';
import shapes from '../../styles/shapes';
import shadows from '../../styles/shadows';
import states from '../../styles/states';
import layouts from '../../styles/layouts';

export default styled('input')`
  ${bgs.dark}
  ${shapes.narrow}
  ${shapes.fill}
  ${shadows.simple}
  ${layouts.noshrink}
  ${states.focused([bgs.darkLight, shadows.pop])}
`;
