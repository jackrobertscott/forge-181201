import React, { FunctionComponent } from 'react';
import Header from '../../components/menus/Header';
import PopupMenu from '../../components/menus/PopupMenu';
import { Link } from 'lumbridge';

interface ITopbarProps {}

const Topbar: FunctionComponent<ITopbarProps> = () => {
  const menu = (
    <PopupMenu.List>
      <PopupMenu.Item as={Link} to="/settings/profile">
        Profile
      </PopupMenu.Item>
      <PopupMenu.Item as={Link} to="/settings/profile">
        Preferences
      </PopupMenu.Item>
      <PopupMenu.Item as={Link} to="/settings/profile">
        Account
      </PopupMenu.Item>
      <PopupMenu.Item as={Link} to="/settings/profile">
        Membership
      </PopupMenu.Item>
    </PopupMenu.List>
  );
  return <Header menu={menu} />;
};

export default Topbar;
