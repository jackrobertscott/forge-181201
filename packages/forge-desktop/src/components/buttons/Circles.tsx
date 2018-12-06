import React from 'react';
import styled, { css } from 'styled-components';
import colors from '../../styles/colors';
import layouts from '../../styles/layouts';

const Wrap = styled('div')`
  ${layouts.rowsCenter}
  ${({ height }: { height?: string; [name: string]: any }) =>
    height &&
    css`
      height: ${height};
    `}
`;

const Circle = styled('div')`
  background-color: ${colors.white};
  height: 6px;
  width: 6px;
  border-radius: 50%;
  margin-right: 3px;
  &:last-child {
    margin-right: 0;
  }
`;

export default (args: any) => (
  <Wrap {...args}>
    <Circle />
    <Circle />
    <Circle />
  </Wrap>
);
