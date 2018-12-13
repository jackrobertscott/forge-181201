import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';
import { Link } from 'lumbridge';
import bgs from '../../styles/bgs';
import colors from '../../styles/colors';
import shadows from '../../styles/shadows';
import layouts from '../../styles/layouts';
import Circles from '../buttons/Circles';
import PopupMenu from './PopupMenu';
import MiniButton from '../buttons/MiniButton';

const Wrap = styled('div').attrs({ borderless: 'true' })`
  ${bgs.dark}
  ${shadows.simple}
  border-bottom: 1px solid ${colors.nightDark};
  flex-shrink: 0;
`;

const Forward = styled('div')`
  ${layouts.rowsCenter}
  justify-content: flex-end;
  position: relative;
  z-index: 100;
  height: 40px;
  padding: 0 15px;
  -webkit-app-region: drag;
`;

export interface IHeaderProps {
  menu: ReactNode;
}

const Header: FunctionComponent<IHeaderProps> = ({ menu }) => (
  <Wrap>
    <Forward>
      <MiniButton as={Link} to="/">
        Dashboard
      </MiniButton>
      <MiniButton as={Link} to="/market">
        Market
      </MiniButton>
      <PopupMenu items={menu}>
        <MiniButton>
          <Circles />
        </MiniButton>
      </PopupMenu>
    </Forward>
  </Wrap>
);

export default Header;
