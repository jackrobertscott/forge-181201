import React, { FunctionComponent } from 'react';
import Cape from '../../components/layouts/Cape';
import SettingsMenu from '../menus/SettingsMenu';
import SettingsRoutes from '../../routes/settingsRoutes';

const Routes = SettingsRoutes.render();

export interface ISettingsProps {}

const Settings: FunctionComponent<ISettingsProps> = () => {
  return (
    <Cape>
      <SettingsMenu />
      <Routes />
    </Cape>
  );
};

export default Settings;
