import React, { FunctionComponent } from 'react';
import { Link } from 'lumbridge';
import PopupMenu from '../../components/menus/PopupMenu';
import { ICodeFragment } from '../../components/lists/ChooseCode';

export interface ICodeMenuProps {
  data: {
    code: ICodeFragment;
  };
  handlers: {
    clipboardCopyCode: (data: { value: string; id?: string }) => void;
    deleteCode: (data: { id: string }) => void;
    cloneCode: (data: { id: string }) => void;
  };
}

const CodeMenu: FunctionComponent<ICodeMenuProps> = ({ data, handlers }) => {
  const deleteCode = () => handlers.deleteCode(data.code);
  const cloneCode = () => handlers.cloneCode(data.code);
  const copyCode = () =>
    handlers.clipboardCopyCode({ value: data.code.contents, id: data.code.id });
  return (
    <PopupMenu.List>
      <PopupMenu.Item onClick={copyCode}>Copy</PopupMenu.Item>
      <PopupMenu.Item as={Link} to={`/edit?id=${data.code.id}`}>
        Edit
      </PopupMenu.Item>
      <PopupMenu.Item onClick={cloneCode}>Duplicate</PopupMenu.Item>
      <PopupMenu.Item onClick={deleteCode}>Delete</PopupMenu.Item>
    </PopupMenu.List>
  );
};

export default CodeMenu;
