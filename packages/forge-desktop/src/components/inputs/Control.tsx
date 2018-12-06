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
  ${words.small}
  ${words.secondary}
  ${({ problem }: { problem: boolean }) => problem && words.danger}
  margin: 0.2em 0 0.5em;
`;

interface IControlProps {
  label: string;
  help: string;
  error?: string;
  component?: any;
  field?: any;
  [name: string]: any;
}

const Control: FunctionComponent<IControlProps> = ({
  label,
  help,
  problem,
  component = SimpleInput,
  field,
  ...args
}) => {
  const InputComponent = component;
  return (
    <Wrap>
      <Label>{label}</Label>
      <Status problem={!!problem}>{problem || help}</Status>
      <InputComponent {...args} {...field} />
    </Wrap>
  );
};

export default Control;
