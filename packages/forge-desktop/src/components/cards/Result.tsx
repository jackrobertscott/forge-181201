import React, { FunctionComponent, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import bgs from '../../styles/bgs';
import shapes from '../../styles/shapes';
import shadows from '../../styles/shadows';
import layouts from '../../styles/layouts';
import words from '../../styles/words';
import states from '../../styles/states';
import Circles from '../buttons/Circles';
import MiniButton from '../buttons/MiniButton';
import PopupMenu from '../menus/PopupMenu';

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
    `}
  ${({ active }) =>
    active &&
    css`
      &,
      &:hover,
      &:active {
        ${bgs.darkLighter}
      }
    `}
`;

const Name = styled('div')`
  margin-right: auto;
`;

const Note = styled('div')`
  ${words.secondary}
  text-align: right;
`;

export interface IResultProps {
  children: ReactNode;
  note: ReactNode;
  menu?: ReactNode;
  [name: string]: any;
}

const Result: FunctionComponent<IResultProps> = ({
  children,
  note,
  menu,
  ...args
}) => {
  const displayMenu = menu && (
    <PopupMenu items={menu}>
      <MiniButton>
        <Circles />
      </MiniButton>
    </PopupMenu>
  );
  return (
    <Wrap {...args}>
      <Name>{children}</Name>
      <Note>{note}</Note>
      {displayMenu}
    </Wrap>
  );
};

export default Result;
