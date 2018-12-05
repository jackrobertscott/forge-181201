import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';
import bgs from '../../styles/bgs';
import shapes from '../../styles/shapes';
import shadows from '../../styles/shadows';
import layouts from '../../styles/layouts';
import words from '../../styles/words';

const Wrap = styled('div')`
  ${bgs.dark}
  ${shapes.simple}
  ${shapes.thin}
  ${shadows.simple}
  ${layouts.space}
  ${layouts.rowsCenter}
`;

const Name = styled('div')`
  margin-right: auto;
`;

const Note = styled('div')`
  ${words.secondary}
`;

interface IResultProps {
  children: ReactNode;
  note: ReactNode;
}

const Result: FunctionComponent<IResultProps> = ({ children, note }) => (
  <Wrap>
    <Name>{children}</Name>
    <Note>{note}</Note>
  </Wrap>
);

export default Result;
