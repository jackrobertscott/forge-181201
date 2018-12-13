import React, { FunctionComponent, useState, useEffect } from 'react';
import styled from 'styled-components';
import keycode from 'keycode';
import { IComponentProps } from '../../utils/components';
import Result from '../cards/Result';
import List from '../layouts/List';
import useKeyboard from '../../containers/effects/useKeyboard';

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
    focusedCode: ICodeFragment;
  };
  handlers: {
    focus: (code: ICodeFragment, force?: boolean) => any;
    choose: (code?: ICodeFragment) => any;
  };
}

const ChooseCode: FunctionComponent<IChooseCodeProps> = ({
  data,
  handlers,
}) => {
  const { focusedCode } = data;
  const { activeKey } = useKeyboard('keydown');
  useEffect(
    () => {
      if (activeKey && data.codes.length) {
        const index = focusedCode
          ? data.codes.findIndex(code => code.id === focusedCode.id)
          : -1;
        const lastIndex = data.codes.length - 1;
        const prevIndex = index - 1;
        const nextIndex = index + 1;
        if (keycode.isEventKey(activeKey, 'up')) {
          const focus =
            index === -1
              ? data.codes[0]
              : data.codes[index <= 0 ? 0 : prevIndex];
          handlers.focus(focus);
        }
        if (keycode.isEventKey(activeKey, 'down')) {
          const focus =
            index === -1
              ? data.codes[0]
              : data.codes[index >= lastIndex ? lastIndex : nextIndex];
          handlers.focus(focus);
        }
        if (keycode.isEventKey(activeKey, 'right')) {
          handlers.choose(focusedCode);
        }
        if (keycode.isEventKey(activeKey, 'escape')) {
          handlers.choose();
        }
      }
    },
    [activeKey]
  );
  const codes = data.codes.map((code: ICodeFragment) => {
    const { id, name, shortcut } = code;
    const focus = () => handlers.focus(code, true);
    return (
      <Result
        key={id}
        note={shortcut}
        onClick={focus}
        active={focusedCode && focusedCode.id === id}
      >
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
