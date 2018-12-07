import React, { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import bgs from '../../styles/bgs';
import shapes from '../../styles/shapes';
import shadows from '../../styles/shadows';
import Editor from './Editor';
import layouts from '../../styles/layouts';

const Wrap = styled('div')`
  ${bgs.dark}
  ${shapes.simple}
  ${shadows.simple}
  ${layouts.columns}
  flex-grow: 1;
  padding-top: 25px;
`;

export interface IRegularEditorProps {}

const RegularEditor: FunctionComponent<IRegularEditorProps> = ({ ...args }) => (
  <Wrap>
    <Editor {...args} />
  </Wrap>
);

export default RegularEditor;
