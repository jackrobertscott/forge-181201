import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import layouts from '../../styles/layouts';
import words from '../../styles/words';
import SimpleInput from './SimpleInput';

const Wrap = styled('div')`
  ${layouts.columns}
`;

const Label = styled('label')`
  ${words.normal}
`;

const Status = styled('div')`
  ${({ problem }: { problem?: boolean | string; [name: string]: any }) =>
    problem && words.danger}
  ${words.small}
  ${words.secondary}
  margin: 0.2em 0 0.5em;
`;

interface IControlProps {
  label: string;
  help: string;
  error?: string;
  component?: any;
  input?: any;
  field?: any;
  [name: string]: any;
}

const Control: FunctionComponent<IControlProps> = ({
  label,
  help,
  problem,
  component,
  input = SimpleInput,
  field,
  ...args
}) => {
  const InputComponent = component || input;
  return (
    <Wrap>
      <Label>{label}</Label>
      <Status problem={!!problem}>{problem || help}</Status>
      <InputComponent {...args} {...field} />
    </Wrap>
  );
};

export default Control;
