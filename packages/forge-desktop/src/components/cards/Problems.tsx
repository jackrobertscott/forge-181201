import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import bgs from '../../styles/bgs';
import shapes from '../../styles/shapes';
import shadows from '../../styles/shadows';
import layouts from '../../styles/layouts';
import { sentenceCase } from 'change-case';

const Wrap = styled('div')`
  ${bgs.danger}
  ${shapes.simple}
  ${shadows.simple}
  ${layouts.space}
  ${({ slim }: any) => slim && shapes.thin}
  flex-grow: 1;
  flex-shrink: 0;
`;

export interface IProblemProps {
  items?: {
    [error: string]: string;
  };
  [name: string]: any;
}

const Problems: FunctionComponent<IProblemProps> = ({
  items: errors = {},
  ...args
}) => {
  const mapErrors = Object.keys(errors).map(key => (
    <div key={key}>{sentenceCase((errors as any)[key])}</div>
  ));
  const problems = errors && !!Object.keys(errors).length && (
    <Wrap {...args}>{mapErrors}</Wrap>
  );
  return problems || <div />;
};

export default Problems;
