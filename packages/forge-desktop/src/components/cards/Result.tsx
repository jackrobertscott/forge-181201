import React, { FunctionComponent, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import bgs from '../../styles/bgs';
import shapes from '../../styles/shapes';
import shadows from '../../styles/shadows';
import layouts from '../../styles/layouts';
import words from '../../styles/words';
import states from '../../styles/states';

const Wrap = styled('div')`
  ${bgs.dark}
  ${shapes.simple}
  ${shapes.thin}
  ${shadows.simple}
  ${layouts.space}
  ${layouts.rowsCenter}
  ${({ onClick }) =>
    onClick &&
    css`
      cursor: pointer;
      ${states.hovered(bgs.darkLight)}
      ${states.clicked([bgs.dark, shadows.none])}
    `}
`;

const Name = styled('div')`
  margin-right: auto;
`;

const Note = styled('div')`
  ${words.secondary}
`;

export interface IResultProps {
  children: ReactNode;
  note: ReactNode;
  [name: string]: any;
}

const Result: FunctionComponent<IResultProps> = ({
  children,
  note,
  ...args
}) => (
  <Wrap {...args}>
    <Name>{children}</Name>
    <Note>{note}</Note>
  </Wrap>
);

export default Result;
