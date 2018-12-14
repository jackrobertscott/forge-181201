import React, { FunctionComponent, useEffect, useState } from 'react';
import authRoutes from '../routes/authRoutes';
import authStore from '../stores/authStore';
import authScope, { retrieveLocalAuth } from '../scopes/authScope';
import { runElectron } from '../utils/electron';
import { getUserQuery } from './settings/Preferences';
import { loadAsset } from '../utils/assets';
import intercom from '../utils/intercom';
import withToaster from '../components/toast/withToaster';
import toastStore from '../stores/toastStore';

const Routes = authRoutes.render();

export interface IAppProps {
  addToast: (data: { type?: string; contents?: string }) => any;
}

const App: FunctionComponent<IAppProps> = ({ addToast }) => {
  const [authChecked, setAuthChecked] = useState<boolean>(false);
  useEffect(() => {
    const unwatch = authScope.watch({
      data: data => {
        authStore.dispatch.patch(data);
        if (Object.keys(data).length) {
          getUserQuery.execute();
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
        if (!me) {
          return;
        }
        runElectron(electron => {
          electron.ipcRenderer.send('updateShortcuts', {
            open: me.preferences.shortcutOpen,
          });
        });
        intercom.update({
          user_id: me.id,
          user_hash: me.hash,
          name: me.name,
          username: me.username,
          email: me.email,
          created_at: me.createdAt,
          updated_at: me.updatedAt,
          is_subscribed: me.isSubscribed,
        });
      },
    });
    runElectron(electron => electron.ipcRenderer.send('ready'));
    return () => unwatch();
  }, []);
  useEffect(() => {
    intercom.start();
    return () => intercom.shutdown();
  });
  useEffect(() => {
    const unwatch = toastStore.watch({
      state: ({ type, contents }) =>
        type && contents && addToast({ type, contents }),
    });
    return () => unwatch();
  });
  if (!authChecked) {
    return (
      <div className="app-loading-screen">
        <img src={loadAsset('logo/Dark.svg')} />
      </div>
    );
  }
  return <Routes />;
};

export default withToaster(App);
