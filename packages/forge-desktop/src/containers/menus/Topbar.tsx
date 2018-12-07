import React, { FunctionComponent } from 'react';
import Header from '../../components/menus/Header';
import PopupMenu from '../../components/menus/PopupMenu';
import { Link } from 'lumbridge';

export interface ITopbarProps {}

const Topbar: FunctionComponent<ITopbarProps> = () => {
  const menu = (
    <PopupMenu.List>
      <PopupMenu.Item as={Link} to="/settings/profile">
        Profile
      </PopupMenu.Item>
      <PopupMenu.Item as={Link} to="/settings/preferences">
        Preferences
      </PopupMenu.Item>
      <PopupMenu.Item as={Link} to="/settings/accounts">
        Accounts
      </PopupMenu.Item>
      <PopupMenu.Item as={Link} to="/settings/membership">
        Membership
      </PopupMenu.Item>
    </PopupMenu.List>
  );
  return <Header menu={menu} />;
};

export default Topbar;
