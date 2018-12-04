import styled from 'styled-components';
import bgs from '../styles/bgs';
import layouts from '../styles/layouts';

export default styled('div')`
  ${bgs.fade}
  ${layouts.columns};
  flex-grow: 1;
`;
