import React, { FunctionComponent } from 'react';
import PopupMenu from '../../components/menus/PopupMenu';

export interface ICodeMenuProps {}

const CodeMenu: FunctionComponent<ICodeMenuProps> = () => {
  return (
    <PopupMenu.List>
      <PopupMenu.Item>Copy</PopupMenu.Item>
      <PopupMenu.Item>Edit</PopupMenu.Item>
      <PopupMenu.Item>Duplicate</PopupMenu.Item>
      <PopupMenu.Item>Delete</PopupMenu.Item>
    </PopupMenu.List>
  );
};

export default CodeMenu;
