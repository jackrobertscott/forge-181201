import styled from 'styled-components';
import bgs from '../../styles/bgs';
import shapes from '../../styles/shapes';
import shadows from '../../styles/shadows';
import layouts from '../../styles/layouts';

export default styled('div')`
  ${bgs.dark}
  ${shapes.simple}
  ${shadows.simple}
  ${layouts.space}
  ${({ slim }: any) => slim && shapes.thin}
  flex-grow: 1;
  flex-shrink: 0;
`;
