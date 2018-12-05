import styled, { css } from 'styled-components';
import bgs from '../../styles/bgs';
import shapes from '../../styles/shapes';
import shadows from '../../styles/shadows';
import states from '../../styles/states';
import layouts from '../../styles/layouts';

export default styled('button')`
  ${bgs.marine}
  ${shapes.narrow}
  ${shadows.simple}
  ${layouts.space}
  ${states.hovered(bgs.marineLight)}
  ${states.clicked([bgs.marine, shadows.none])}
  ${({ auto }: any) =>
    auto &&
    css`
    margin-${auto}: auto;
  `}
`;
