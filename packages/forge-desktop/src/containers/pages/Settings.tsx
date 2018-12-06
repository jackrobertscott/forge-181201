import React, { FunctionComponent } from 'react';
import Cape from '../../components/layouts/Cape';
import SettingsMenu from '../menus/SettingsMenu';

interface ISettingsProps {}

const Settings: FunctionComponent<ISettingsProps> = () => {
  return (
    <Cape>
      <SettingsMenu />
      <>Hello</>
    </Cape>
  );
};

export default Settings;
