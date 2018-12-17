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

const CodeMenu: FunctionComponent<ICodeMenuProps> = ({
  data: { code },
  handlers,
}) => {
  const deleteCode = () => handlers.deleteCode(code);
  const cloneCode = () => handlers.cloneCode(code);
  const copyCode = () =>
    handlers.clipboardCopyCode({ value: code.contents, id: code.id });
  return (
    <PopupMenu.List>
      <PopupMenu.Item onClick={copyCode}>Copy</PopupMenu.Item>
      <PopupMenu.Item as={Link} to={`/edit?id=${code.id}`}>
        Edit
      </PopupMenu.Item>
      <PopupMenu.Item onClick={cloneCode}>Duplicate</PopupMenu.Item>
      <PopupMenu.Item onClick={deleteCode}>Delete</PopupMenu.Item>
    </PopupMenu.List>
  );
};

export default CodeMenu;
