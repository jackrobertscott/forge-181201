import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';
import layouts from '../../styles/layouts';
import bgs from '../../styles/bgs';
import shadows from '../../styles/shadows';
import shapes from '../../styles/shapes';
import states from '../../styles/states';
import List from '../layouts/List';

const Wrap = styled('div')``;

export interface ICardMenuProps {
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
  ${shapes.narrow}
  ${shadows.simple}
  ${layouts.space}
  ${bgs.darkLight}
  ${states.hovered(bgs.darkLighter)}
  ${states.clicked([bgs.darkLight, shadows.none])}
  ${({
    ...args
  }: {
    as?: boolean | string;
    to?: boolean | string;
    [name: string]: any;
  }) => null}
`;

export default CardMenu;
