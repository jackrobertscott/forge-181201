import React, { ReactNode, FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import layouts from '../../styles/layouts';
import shapes from '../../styles/shapes';

const Wrap = styled('div')`
  ${layouts.rows}
  ${shapes.padded}
  ${({ modal }: { modal?: boolean | string }) =>
    modal &&
    css`
      width: 800px;
      max-width: 100%;
    `}
  flex-grow: 1;
`;

const Sidebar = styled('div')`
  ${layouts.columns}
  width: 35%;
  min-width: 35%;
  margin-right: 15px;
`;

const Main = styled('div')`
  ${layouts.columns}
  flex-grow: 1;
`;

interface ISplitProps {
  children: ReactNode;
  sidebar: any;
  [name: string]: any;
}

const Split: FunctionComponent<ISplitProps> = ({
  sidebar,
  children,
  ...args
}: ISplitProps) => (
  <Wrap {...args}>
    <Sidebar>{sidebar}</Sidebar>
    <Main>{children}</Main>
  </Wrap>
);

export default Split;
