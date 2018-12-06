import React, { ReactNode, FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import layouts from '../../styles/layouts';
import shapes from '../../styles/shapes';

const Wrap = styled('div')`
  ${layouts.rows}
  ${shapes.padded}
  ${({ modal }: { modal?: boolean | string; [name: string]: any }) =>
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
  ${({ reverse }: { reverse?: boolean | string; [name: string]: any }) =>
    reverse &&
    css`
      margin-right: 0;
      margin-left: 15px;
      order: 1;
    `}
`;

const Main = styled('div')`
  ${layouts.columns}
  flex-grow: 1;
`;

interface ISplitProps {
  children: ReactNode[];
  reverse?: boolean;
  [name: string]: any;
}

const Split: FunctionComponent<ISplitProps> = ({
  children,
  reverse,
  ...args
}: ISplitProps) => (
  <Wrap {...args}>
    <Sidebar reverse={reverse}>{children[0]}</Sidebar>
    <Main>{children[1]}</Main>
  </Wrap>
);

export default Split;
