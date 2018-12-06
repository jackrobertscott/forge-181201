import React, { FunctionComponent } from 'react';
import List from '../../components/layouts/List';
import Card from '../../components/cards/Card';
import { Link } from 'lumbridge';

interface ISettingsMenuProps {}

const SettingsMenu: FunctionComponent<ISettingsMenuProps> = () => (
  <List>
    <Card slim="true" as={Link} to="/settings/profile">
      Profile
    </Card>
    <Card slim="true" as={Link} to="/settings/preferences">
      Preferences
    </Card>
    <Card slim="true" as={Link} to="/settings/accounts">
      Accounts
    </Card>
    <Card slim="true" as={Link} to="/settings/membership">
      Membership
    </Card>
  </List>
);

export default SettingsMenu;
