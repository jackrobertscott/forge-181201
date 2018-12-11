import React, { ReactNode, FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import bgs from '../../styles/bgs';
import shapes from '../../styles/shapes';
import shadows from '../../styles/shadows';
import states from '../../styles/states';
import layouts from '../../styles/layouts';
import colors from '../../styles/colors';

const Wrap = styled('button').attrs({ type: 'button' })`
  ${bgs.marine}
  ${shapes.narrow}
  ${shadows.simple}
  ${layouts.space}
  ${layouts.noshrink}
  ${layouts.rowsCenter}
  justify-content: space-between;
  ${states.hovered(bgs.marineLight)}
  ${states.clicked([bgs.marine, shadows.none])}
  ${({ auto }: { auto?: string; [name: string]: any }) =>
    auto &&
    css`
    margin-${auto}: auto;
  `}
  ${({ min }: { min?: string | boolean; [name: string]: any }) =>
    min &&
    css`
      min-width: 140px;
    `}
  ${({ bright }: { bright?: string | boolean; [name: string]: any }) =>
    bright &&
    css`
      color: ${colors.white};
      &:hover {
        color: ${colors.white};
      }
    `}
`;

export interface IGoodButton {
  children: ReactNode;
  loading?: boolean;
  icon?: ReactNode;
  [property: string]: any;
}

const GoodButton: FunctionComponent<IGoodButton> = ({
  children,
  loading,
  icon,
  ...args
}) => (
  <Wrap disabled={!!loading} {...args}>
    {loading ? 'Loading...' : children}
    {icon}
  </Wrap>
);

export default GoodButton;
