import React, { FunctionComponent } from 'react';
import Cape from '../../components/layouts/Cape';
import SettingsMenu from '../menus/SettingsMenu';
import SettingsRoutes from '../routes/SettingsRoutes';

export interface ISettingsProps {}

const Settings: FunctionComponent<ISettingsProps> = () => {
  return (
    <Cape>
      <SettingsMenu />
      <SettingsRoutes />
    </Cape>
  );
};

export default Settings;
