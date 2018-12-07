import React, { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import { sentenceCase } from 'change-case';
import layouts from '../../styles/layouts';
import words from '../../styles/words';
import colors from '../../styles/colors';
import SimpleInput from './SimpleInput';
import animate from '../../styles/animate';

const Wrap = styled('div')`
  ${layouts.columns}
  ${layouts.noshrink}
`;

const Label = styled('label')`
  ${words.normal}
`;

const Status = styled('div')`
  ${words.small}
  ${words.secondary}
  ${({ problem }: { problem?: boolean | string; [name: string]: any }) =>
    problem && words.danger}
  margin-top: 0.2em;
`;

const Alert = styled('div')`
  ${layouts.rows}
  margin-bottom: 0.5em;
`;

const Sidepop = styled('div')`
  ${({ problem }: { problem?: boolean | string; [name: string]: any }) =>
    problem &&
    css`
      width: 5px;
      border-radius: 10px;
      background-color: ${colors.dangerLighter};
      margin-right: 5px;
      margin-bottom: 2px;
      margin-top: 2px;
      animation: ${animate.fadeIn} 0.2s linear;
    `}
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
  const message = sentenceCase(problem || help);
  return (
    <Wrap>
      <Alert>
        <Sidepop problem={problem} />
        <div>
          <Label>{label}</Label>
          <Status problem={problem}>{message}</Status>
        </div>
      </Alert>
      <InputComponent {...args} {...field} />
    </Wrap>
  );
};

export default Control;
