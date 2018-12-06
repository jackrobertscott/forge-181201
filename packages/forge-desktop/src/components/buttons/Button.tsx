import React, { ReactNode, FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import bgs from '../../styles/bgs';
import shapes from '../../styles/shapes';
import shadows from '../../styles/shadows';
import states from '../../styles/states';
import layouts from '../../styles/layouts';

const Wrap = styled('button').attrs({ type: 'button' })`
  ${bgs.dark}
  ${shapes.narrow}
  ${shadows.simple}
  ${layouts.space}
  ${states.hovered(bgs.darkLight)}
  ${states.clicked([bgs.dark, shadows.none])}
  ${({ auto }: any) =>
    auto &&
    css`
    margin-${auto}: auto;
  `}
`;

interface IButton {
  children: ReactNode;
  loading?: boolean;
  [property: string]: any;
}

const Button: FunctionComponent<IButton> = ({ children, loading, ...args }) => (
  <Wrap {...args}>{loading ? 'Loading...' : children}</Wrap>
);

export default Button;
