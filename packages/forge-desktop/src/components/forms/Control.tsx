import React, { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import layouts from '../../styles/layouts';
import words from '../../styles/words';

const Wrap = styled('div')`
  ${layouts.columns}
`;

const Label = styled('label')`
  ${words.normal}
`;

const Status = styled('div')`
  ${words.small}
  ${words.secondary}
  ${({ error }: { error: boolean }) => error && words.danger}
  margin: 0.2em 0 0.5em;
`;

interface IControlProps {
  label: string;
  help: string;
  error?: string;
  input: any;
  [name: string]: any;
}

const Control: FunctionComponent<IControlProps> = ({
  label,
  help,
  error,
  input,
  ...args
}) => {
  const InputComponent = input;
  return (
    <Wrap>
      <Label>{label}</Label>
      <Status error={!!error}>{error || help}</Status>
      <InputComponent {...args} />
    </Wrap>
  );
};

export default Control;
