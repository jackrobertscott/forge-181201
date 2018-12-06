import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';
import bgs from '../../styles/bgs';
import colors from '../../styles/colors';
import shadows from '../../styles/shadows';
import layouts from '../../styles/layouts';
import shapes from '../../styles/shapes';
import words from '../../styles/words';
import states from '../../styles/states';
import Circles from '../buttons/Circles';
import PopupMenu from './PopupMenu';
import { Link } from 'lumbridge';
import { boolean } from 'yup';

const Wrap = styled('div').attrs({ borderless: 'true' })`
  ${bgs.dark}
  ${shadows.simple}
  ${layouts.rowsCenter}
  justify-content: flex-end;
  border-bottom: 1px solid ${colors.nightDark};
  height: 40px;
  max-height: 40px;
  padding: 0 15px;
  flex-grow: 1;
  flex-shrink: 0;
`;

const MiniButton = styled('button')`
  ${({ ...args }: { to?: boolean | string; [name: string]: any }) => null}
  ${bgs.darkLight}
  ${shapes.mini}
  ${shadows.simple}
  ${states.hovered(bgs.darkLighter)}
  ${states.clicked([bgs.darkLight, shadows.none])}
  ${words.small}
  margin-left: 10px;
`;

interface IHeaderProps {
  menu: ReactNode;
}

const Header: FunctionComponent<IHeaderProps> = ({ menu }) => (
  <Wrap>
    <MiniButton as={Link} to="/">
      Dashboard
    </MiniButton>
    <MiniButton>Market</MiniButton>
    <PopupMenu items={menu}>
      <MiniButton>
        <Circles height="15px" />
      </MiniButton>
    </PopupMenu>
  </Wrap>
);

export default Header;
