import React, { FunctionComponent, useState, useEffect } from 'react';
import styled from 'styled-components';
import keycode from 'keycode';
import { IComponentProps } from '../../utils/components';
import Result from '../cards/Result';
import List from '../layouts/List';
import useKeyboard from '../../containers/effects/useKeyboard';
import CodeMenu from '../../containers/menus/CodeMenu';

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
    focusCode: (code: ICodeFragment, force?: boolean) => any;
    chooseCode: (code?: ICodeFragment) => any;
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
          handlers.focusCode(focus);
        }
        if (keycode.isEventKey(activeKey, 'down')) {
          const focus =
            index === -1
              ? data.codes[0]
              : data.codes[index >= lastIndex ? lastIndex : nextIndex];
          handlers.focusCode(focus);
        }
        if (keycode.isEventKey(activeKey, 'right')) {
          handlers.chooseCode(focusedCode);
        }
        if (keycode.isEventKey(activeKey, 'escape')) {
          handlers.chooseCode();
        }
      }
    },
    [activeKey]
  );
  const codes = data.codes.map((code: ICodeFragment) => {
    const { id, name, shortcut } = code;
    const focus = () => handlers.focusCode(code, true);
    return (
      <Result
        key={id}
        note={shortcut}
        onClick={focus}
        active={focusedCode && focusedCode.id === id}
        menu={<CodeMenu />}
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
