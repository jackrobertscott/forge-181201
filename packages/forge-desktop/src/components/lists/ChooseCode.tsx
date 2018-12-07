import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { IComponentProps } from '../../utils/components';
import Result from '../cards/Result';
import List from '../layouts/List';

const Wrap = styled('div')`
  flex-grow: 1;
  overflow: auto;
`;

export interface ICodeFragment {
  id: string;
  name: string;
  shortcut: string;
}

export interface IChooseCodeProps extends IComponentProps {
  data: {
    codes: ICodeFragment[];
  };
  handlers: {
    choose: (code: ICodeFragment) => any;
    [name: string]: any;
  };
}

const ChooseCode: FunctionComponent<IChooseCodeProps> = ({
  data,
  handlers,
}) => {
  const codes = data.codes.map((code: ICodeFragment) => {
    const { id, name, shortcut } = code;
    const choose = () => handlers.choose(code);
    return (
      <Result key={id} note={shortcut} onClick={choose}>
        {name}
      </Result>
    );
  });
  return (
    <Wrap>
      <List>{codes}</List>
    </Wrap>
  );
};

export default ChooseCode;
