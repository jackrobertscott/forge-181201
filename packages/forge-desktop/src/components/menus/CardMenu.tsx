import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';
import layouts from '../../styles/layouts';
import bgs from '../../styles/bgs';
import shadows from '../../styles/shadows';
import shapes from '../../styles/shapes';
import states from '../../styles/states';
import List from '../layouts/List';

const Wrap = styled('div')``;

interface ICardMenuProps {
  children: ReactNode;
}

const CardMenu: FunctionComponent<ICardMenuProps> & {
  Item: any;
} = ({ children }) => (
  <Wrap>
    <List>{children}</List>
  </Wrap>
);

CardMenu.Item = styled('div')`
  ${bgs.dark}
  ${shapes.narrow}
  ${shadows.simple}
  ${layouts.space}
  ${states.hovered(bgs.darkLight)}
  ${states.clicked([bgs.dark, shadows.none])}
  ${({
    ...args
  }: {
    as?: boolean | string;
    to?: boolean | string;
    [name: string]: any;
  }) => null}
`;

export default CardMenu;
