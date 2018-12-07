import React, { ReactNode, FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import bgs from '../../styles/bgs';
import shapes from '../../styles/shapes';
import shadows from '../../styles/shadows';
import states from '../../styles/states';
import layouts from '../../styles/layouts';

const Wrap = styled('button').attrs({ type: 'button' })`
  ${bgs.marine}
  ${shapes.narrow}
  ${shadows.simple}
  ${layouts.space}
  ${layouts.noshrink}
  ${states.hovered(bgs.marineLight)}
  ${states.clicked([bgs.marine, shadows.none])}
  ${({ auto }: { auto?: string; [name: string]: any }) =>
    auto &&
    css`
    margin-${auto}: auto;
  `}
  ${({ min }: { min?: string; [name: string]: any }) =>
    min &&
    css`
      min-width: 140px;
    `}
`;

interface IGoodButton {
  children: ReactNode;
  loading?: boolean;
  [property: string]: any;
}

const GoodButton: FunctionComponent<IGoodButton> = ({
  children,
  loading,
  ...args
}) => <Wrap {...args}>{loading ? 'Loading...' : children}</Wrap>;

export default GoodButton;
