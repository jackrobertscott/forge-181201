import { SFC } from 'react';
import styled from 'styled-components';
import bgs from '../../styles/bgs';
import shapes from '../../styles/shapes';
import shadows from '../../styles/shadows';
import Editor from './Editor';

export default styled('div')`
  ${bgs.dark}
  ${shapes.simple}
  ${shadows.simple}
`;

interface IStatusEditorProps {
  [name: string]: any;
}

const StatusEditor: SFC<IStatusEditorProps> = () => <Editor />;
