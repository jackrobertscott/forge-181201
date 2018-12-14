import React, { FunctionComponent } from 'react';
import { Link, Terminal } from 'lumbridge';
import Header from '../../components/menus/Header';
import PopupMenu from '../../components/menus/PopupMenu';
import { saveLocalAuth } from '../../scopes/authScope';
import intercom from '../../utils/intercom';

export interface ITopbarProps {}

const Topbar: FunctionComponent<ITopbarProps> = () => {
  const logout = () => {
    saveLocalAuth.execute({ data: {} });
    intercom.restart();
    setTimeout(() => Terminal.navigate('/auth'));
  };
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
      <PopupMenu.Item id="intercom-launcher">
        Help &amp; Feedback
      </PopupMenu.Item>
      <PopupMenu.Item onClick={logout}>Logout</PopupMenu.Item>
    </PopupMenu.List>
  );
  return <Header menu={menu} />;
};

export default Topbar;
