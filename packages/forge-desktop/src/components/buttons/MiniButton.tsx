import styled from 'styled-components';
import bgs from '../../styles/bgs';
import shadows from '../../styles/shadows';
import shapes from '../../styles/shapes';
import words from '../../styles/words';
import states from '../../styles/states';

export default styled('button')`
  ${({ ...args }: { to?: boolean | string; [name: string]: any }) => null}
  ${shapes.mini}
  ${shadows.simple}
  ${bgs.darkLight}
  ${states.hovered(bgs.darkLighter)}
  ${states.clicked([bgs.darkLight, shadows.none])}
  ${words.small}
  flex-shrink: 0;
  margin-left: 10px;
  cursor: pointer;
`;
