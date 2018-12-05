import styled from 'styled-components';
import bgs from '../../styles/bgs';
import shapes from '../../styles/shapes';
import shadows from '../../styles/shadows';
import states from '../../styles/states';
import words from '../../styles/words';

export default styled('textarea').attrs({ rows: 3 })`
  ${bgs.dark}
  ${shapes.narrow}
  ${shapes.fill}
  ${shadows.simple}
  ${states.focused([bgs.darkLight, shadows.pop])}
  ${words.multiline}
  resize: none;
`;
