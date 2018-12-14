import React, { FunctionComponent, useEffect, useState } from 'react';
import authRoutes from '../routes/authRoutes';
import authStore from '../stores/authStore';
import authScope, { retrieveLocalAuth } from '../scopes/authScope';
import { runElectron } from '../utils/electron';
import { getUserQuery } from './settings/Preferences';
import { loadAsset } from '../utils/assets';

const Routes = authRoutes.render();

export interface IAppProps {}

const App: FunctionComponent<IAppProps> = () => {
  const [authChecked, setAuthChecked] = useState<boolean>(false);
  useEffect(() => {
    const unwatch = authScope.watch({
      data: data => {
        if (data) {
          authStore.dispatch.patch(data);
        }
        setAuthChecked(true);
      },
    });
    retrieveLocalAuth.execute();
    return () => unwatch();
  }, []);
  useEffect(() => {
    const unwatch = getUserQuery.watch({
      data: ({ me }) => {
        runElectron(electron => {
          electron.ipcRenderer.send('updateShortcuts', {
            open: me.preferences.shortcutOpen,
          });
        });
      },
    });
    getUserQuery.execute();
    runElectron(electron => electron.ipcRenderer.send('ready'));
    return () => unwatch();
  }, []);
  if (!authChecked) {
    return (
      <div className="app-loading-screen">
        <img src={loadAsset('logo/Dark.svg')} />
      </div>
    );
  }
  return <Routes />;
};

export default App;
