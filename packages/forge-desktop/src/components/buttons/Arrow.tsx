import styled from 'styled-components';
import arrow from '../../assets/features/Up.svg';

export default styled('img').attrs({ src: arrow })`
  height: 1em;
  transform: rotate(90deg);
  filter: invert(100%);
  opacity: 0.9;
`;
