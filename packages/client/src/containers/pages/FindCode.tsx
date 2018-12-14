import React, { FunctionComponent, useState, useEffect, useRef } from 'react';
import gql from 'graphql-tag';
import { Link, Terminal } from 'lumbridge';
import { throttle } from 'throttle-debounce';
import Split from '../../components/layouts/Split';
import SimpleInput from '../../components/inputs/SimpleInput';
import StatusEditor from '../../components/editors/StatusEditor';
import GoodButton from '../../components/buttons/GoodButton';
import List from '../../components/layouts/List';
import ChooseCode from '../../components/lists/ChooseCode';
import useInstanceExecute from '../effects/useInstanceExecute';
import apolloPersistor from '../../persistors/apolloPersistor';
import { runElectron } from '../../utils/electron';
import { recordAction } from '../../utils/record';

export const codeListQuery = apolloPersistor.instance({
  name: 'query',
  map: ({ ...args }) => ({
    ...args,
    query: gql`
      query ListCodes($search: String) {
        userCodes(search: $search, filter: { limit: 20 }) {
          id
          name
          shortcut
          contents
        }
      }
    `,
  }),
});

export const deleteCodeMutation = apolloPersistor.instance({
  name: 'mutate',
  map: ({ ...args }) => ({
    ...args,
    mutation: gql`
      mutation DeleteCode($id: String!) {
        deleteCode(id: $id) {
          id
        }
      }
    `,
  }),
});

export const cloneCodeMutation = apolloPersistor.instance({
  name: 'mutate',
  map: ({ ...args }) => ({
    ...args,
    mutation: gql`
      mutation CloneCode($id: String!) {
        cloneCode(id: $id) {
          id
        }
      }
    `,
  }),
});

export interface IFindCodeProps {}

const FindCode: FunctionComponent<IFindCodeProps> = () => {
  const [focusedCode, setFocusedCode] = useState<any>(null);
  const [editing, setEditing] = useState<boolean>(false);
  const searchInput = useRef<HTMLInputElement>(null);
  const redo = () => {
    codeListQuery.redo();
  };
  useEffect(() => {
    const unwatch = deleteCodeMutation.watch({
      data: redo,
    });
    return () => unwatch();
  }, []);
  useEffect(() => {
    const unwatch = cloneCodeMutation.watch({
      data: ({ cloneCode: newCode }) => {
        setTimeout(() => Terminal.navigate(`/edit?id=${newCode.id}`));
      },
    });
    return () => unwatch();
  }, []);
  let mounted = true;
  useEffect(() => {
    runElectron(electron => {
      electron.ipcRenderer.on('focused', () => {
        if (searchInput.current) {
          searchInput.current.select();
        }
        if (mounted) {
          setFocusedCode(null);
          setEditing(false);
        }
      });
    });
    return () => {
      mounted = false;
    };
  }, []);
  const {
    data: { userCodes },
    error,
    loading,
  } = useInstanceExecute(codeListQuery);
  const clipboardCopyCode = ({ id, value }: { value: string; id?: string }) => {
    runElectron(electron => {
      electron.clipboard.writeText(value);
      electron.ipcRenderer.send('dismiss');
    });
    recordAction({
      scope: 'Code',
      action: 'Clipboard Copied',
      properties: {
        codeId: id,
      },
    });
  };
  const deleteCode = ({ id }: { id: string }) =>
    deleteCodeMutation.execute({ variables: { id } });
  const cloneCode = ({ id }: { id: string }) =>
    cloneCodeMutation.execute({ variables: { id } });
  const copyCommand = (code?: { id: string }) => ({
    keycode: 3, // Enter
    action: ({ value }: { value: string }) =>
      clipboardCopyCode({ value, id: code ? code.id : undefined }),
  });
  const runSearch = throttle(300, (event: any) => {
    codeListQuery.execute({ variables: { search: event.target.value } });
  });
  const data = {
    focusedCode,
    codes: userCodes || [],
    error,
    loading,
  };
  const handlers = {
    focusCode: (code: any, force?: boolean) => {
      if (force) {
        setEditing(false);
      }
      if (force || !editing) {
        setFocusedCode(code);
      }
    },
    chooseCode: (code?: any) => setEditing(!!code),
    clipboardCopyCode,
    deleteCode,
    cloneCode,
  };
  return (
    <Split>
      <List>
        <SimpleInput
          autoFocus={true}
          placeholder="Search..."
          onChange={runSearch}
          inner={searchInput}
        />
        <GoodButton as={Link} to="/create" auto="left">
          Create
        </GoodButton>
        <ChooseCode data={data} handlers={handlers} />
      </List>
      <StatusEditor
        value={focusedCode && focusedCode.contents}
        snippeting={editing}
        command={copyCommand(focusedCode)}
      />
    </Split>
  );
};

export default FindCode;
