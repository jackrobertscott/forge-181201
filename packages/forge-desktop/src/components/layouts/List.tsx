import styled from 'styled-components';
import layouts from '../../styles/layouts';

export default styled('div')`
  ${layouts.columns}
  & > * {
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
