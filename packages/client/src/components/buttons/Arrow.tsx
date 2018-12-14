import styled from 'styled-components';
import { loadAsset } from '../../utils/assets';

export default styled('img').attrs({ src: loadAsset('features/Up.svg') })`
  height: 1em;
  transform: rotate(90deg);
  filter: invert(100%);
  opacity: 0.9;
`;
