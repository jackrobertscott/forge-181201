import React, { ReactNode, FunctionComponent } from 'react';
import styled from 'styled-components';
import layouts from '../../styles/layouts';
import animate from '../../styles/animate';
import colors from '../../styles/colors';
import shapes from '../../styles/shapes';

const Wrap = styled('div')`
  ${layouts.rows}
  ${layouts.spider}
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.25);
`;

const Sidebar = styled('div')`
  ${shapes.padded}
  width: 35%;
  min-width: 35%;
  background-color: ${colors.nightLighter};
  animation: ${animate.slideRight} 0.2s linear;
  padding-top: 100px;
  padding-left: 45px;
`;

const Main = styled('div')`
  ${shapes.padded}
  flex-grow: 1;
  background-color: ${colors.nightLight};
  border-left: 1px solid ${colors.night};
  animation: ${animate.slideLeft} 0.2s linear;
  padding-top: 100px;
  padding-right: 45px;
`;

interface ICapeProps {
  children: ReactNode[];
}

const Cape: FunctionComponent<ICapeProps> = ({ children }) => (
  <Wrap>
    <Sidebar>{children[0]}</Sidebar>
    <Main>{children[1]}</Main>
  </Wrap>
);

export default Cape;
