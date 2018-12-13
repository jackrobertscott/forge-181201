import React, { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import bgs from '../../styles/bgs';
import shapes from '../../styles/shapes';
import shadows from '../../styles/shadows';
import Editor, { IEditorProps } from './Editor';
import layouts from '../../styles/layouts';
import words from '../../styles/words';

const Wrap = styled('div')`
  ${bgs.dark}
  ${shapes.simple}
  ${shadows.simple}
  ${layouts.columns}
  flex-grow: 1;
`;

const Status = styled('div')`
  ${shapes.narrow}
  ${shadows.simple}
  ${layouts.rowsCenter}
  ${layouts.space}
  ${bgs.darkLight}
  ${words.secondary}
  ${({ active }: any) => active && [bgs.marine, words.primary]}
  transition: .2s;
  margin-bottom: 20px;
`;

const Title = styled('span')``;

const Subtitle = styled('span')`
  margin-left: auto;
`;

export interface IStatusEditorProps {
  [name: string]: any;
}

const StatusEditor: FunctionComponent<IStatusEditorProps & IEditorProps> = ({
  ...args
}) => {
  const help = args.snippeting
    ? 'Press [Enter] to Copy'
    : 'Press [Right Arrow] to Edit';
  return (
    <Wrap>
      <Status active={args.snippeting} space="bottom">
        <Title>{args.snippeting ? 'Inserting...' : 'Preview'}</Title>
        <Subtitle>{help}</Subtitle>
      </Status>
      <Editor {...args} />
    </Wrap>
  );
};

export default StatusEditor;
