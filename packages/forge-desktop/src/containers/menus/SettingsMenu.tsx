import React, { FunctionComponent } from 'react';
import { Link } from 'lumbridge';
import CardMenu from '../../components/menus/CardMenu';

interface ISettingsMenuProps {}

const SettingsMenu: FunctionComponent<ISettingsMenuProps> = () => (
  <CardMenu>
    <CardMenu.Item slim="true" as={Link} to="/settings/profile">
      Profile
    </CardMenu.Item>
    <CardMenu.Item slim="true" as={Link} to="/settings/preferences">
      Preferences
    </CardMenu.Item>
    <CardMenu.Item slim="true" as={Link} to="/settings/accounts">
      Accounts
    </CardMenu.Item>
    <CardMenu.Item slim="true" as={Link} to="/settings/membership">
      Membership
    </CardMenu.Item>
  </CardMenu>
);

export default SettingsMenu;
