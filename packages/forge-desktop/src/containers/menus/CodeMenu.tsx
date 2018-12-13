import React, { FunctionComponent, useEffect } from 'react';
import gql from 'graphql-tag';
import { Link } from 'lumbridge';
import PopupMenu from '../../components/menus/PopupMenu';
import apolloPersistor from '../../persistors/apolloPersistor';
import { ICodeFragment } from '../../components/lists/ChooseCode';
import { codeListQuery } from '../pages/FindCode';

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

export interface ICodeMenuProps {
  data: {
    code: ICodeFragment;
  };
  handlers: {
    copy: (value: string) => void;
  };
}

const CodeMenu: FunctionComponent<ICodeMenuProps> = ({ data, handlers }) => {
  const copyCode = handlers.copy(data.code.contents);
  useEffect(() => {
    const unwatch = deleteCodeMutation.watch({
      data: () => codeListQuery.refresh(),
    });
    return () => unwatch();
  }, []);
  const deleteCode = () =>
    deleteCodeMutation.execute({ variables: { id: data.code.id } });
  return (
    <PopupMenu.List>
      <PopupMenu.Item onClick={copyCode}>Copy</PopupMenu.Item>
      <PopupMenu.Item as={Link} to={`/edit?id=${data.code.id}`}>
        Edit
      </PopupMenu.Item>
      <PopupMenu.Item>Duplicate</PopupMenu.Item>
      <PopupMenu.Item onClick={deleteCode}>Delete</PopupMenu.Item>
    </PopupMenu.List>
  );
};

export default CodeMenu;
