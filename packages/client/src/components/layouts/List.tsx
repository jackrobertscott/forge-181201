import styled, { css } from 'styled-components';
import layouts from '../../styles/layouts';

export default styled('div')`
  ${layouts.columns}
  flex-grow: 1;
  & > * {
    margin-bottom: ${({
      wide,
    }: {
      wide?: string | boolean;
      [name: string]: any;
    }) => (wide ? '15px' : '10px')};
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
