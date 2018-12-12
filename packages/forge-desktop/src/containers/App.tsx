import React, { FunctionComponent, useEffect, useState } from 'react';
import authRoutes from '../routes/authRoutes';
import authStore from '../stores/authStore';
import authScope, { retrieveLocalAuth } from '../scopes/authScope';
import logo from '../assets/logo/Dark.svg';

const Routes = authRoutes.render();

export interface IAppProps {}

const App: FunctionComponent<IAppProps> = () => {
  const [authChecked, setAuthChecked] = useState<boolean>(false);
  useEffect(() => {
    const unwatch = authScope.watch({
      data: data => {
        authStore.dispatch.patch(data);
        setAuthChecked(true);
      },
    });
    retrieveLocalAuth.execute();
    return () => unwatch();
  }, []);
  if (!authChecked) {
    return (
      <div className="app-loading-screen">
        <img src={logo} />
      </div>
    );
  }
  return <Routes />;
};

export default App;
