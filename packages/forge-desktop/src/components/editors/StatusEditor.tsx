import React, { SFC } from 'react';
import styled, { css } from 'styled-components';
import bgs from '../../styles/bgs';
import shapes from '../../styles/shapes';
import shadows from '../../styles/shadows';
import Editor from './Editor';
import layouts from '../../styles/layouts';
import colors from '../../styles/colors';

const Wrap = styled('div')`
  ${bgs.dark}
  ${shapes.simple}
  ${shadows.simple}
`;

const Status = styled('div')`
  ${({ active }: { active?: boolean | string }) =>
    active
      ? css`
          ${bgs.marine}
        `
      : css`
        ${bgs.darkLight}
        color: ${colors.shade};
      `}
  ${shapes.narrow}
  ${shadows.simple}
  ${layouts.rowsCenter}
  ${layouts.spaceBottom}
`;

const Title = styled('span')``;

const Subtitle = styled('span')`
  margin-left: auto;
`;

interface IStatusEditorProps {
  active: boolean;
  [name: string]: any;
}

const StatusEditor: SFC<IStatusEditorProps> = ({ active, ...args }) => (
  <Wrap>
    <Status active={active}>
      <Title>{active ? 'Insert mode' : 'Preview mode'}</Title>
      <Subtitle>Press Enter to Copy</Subtitle>
    </Status>
    <Editor {...args} />
  </Wrap>
);

export default StatusEditor;
