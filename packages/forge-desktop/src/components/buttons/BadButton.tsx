import React, { ReactNode, FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import bgs from '../../styles/bgs';
import shapes from '../../styles/shapes';
import shadows from '../../styles/shadows';
import states from '../../styles/states';
import layouts from '../../styles/layouts';

const Wrap = styled('button').attrs({ type: 'button' })`
  ${bgs.danger}
  ${shapes.narrow}
  ${shadows.simple}
  ${layouts.space}
  ${layouts.noshrink}
  ${layouts.rowsCenter}
  justify-content: space-between;
  ${states.hovered(bgs.dangerLight)}
  ${states.clicked([bgs.danger, shadows.none])}
  ${({ auto }: { auto?: string; [name: string]: any }) =>
    auto &&
    css`
    margin-${auto}: auto;
  `}
`;

export interface IBadButton {
  children: ReactNode;
  loading?: boolean;
  icon?: ReactNode;
  [property: string]: any;
}

const BadButton: FunctionComponent<IBadButton> = ({
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

export default BadButton;
