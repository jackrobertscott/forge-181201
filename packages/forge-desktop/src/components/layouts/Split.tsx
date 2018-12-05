import React, { ReactNode, FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import layouts from '../../styles/layouts';
import shapes from '../../styles/shapes';

const Wrap = styled('div')`
  ${layouts.rows}
  ${shapes.padded}
`;

const Sidebar = styled('div')`
  width: 35%;
  min-width: 35%;
  margin-right: 15px;
`;

const Main = styled('div')`
  flex-grow: 1;
`;

interface ISplitProps {
  children: ReactNode;
  sidebar: ReactNode;
}

const Split: FunctionComponent<ISplitProps> = ({ sidebar, children }: ISplitProps) => (
  <Wrap>
    <Sidebar>{sidebar}</Sidebar>
    <Main>{children}</Main>
  </Wrap>
);

export default Split;
