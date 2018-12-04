import React from 'react';
import styled from 'styled-components';
import bgs from '../../styles/bgs';
import colors from '../../styles/colors';
import shadows from '../../styles/shadows';
import layouts from '../../styles/layouts';
import shapes from '../../styles/shapes';
import words from '../../styles/words';
import states from '../../styles/states';
import Circles from '../buttons/Circles';

const Header = styled('div').attrs({ borderless: 'true' })`
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
  ${bgs.darkLight}
  ${shapes.mini}
  ${shadows.simple}
  ${states.clickable(bgs.darkLighter)}
  ${states.clicked([bgs.darkLight, shadows.none])}
  ${words.small}
  margin-left: 10px;
`;

export default () => (
  <Header>
    <MiniButton>Dashboard</MiniButton>
    <MiniButton>Market</MiniButton>
    <MiniButton>
      <Circles height="15px" />
    </MiniButton>
  </Header>
);
