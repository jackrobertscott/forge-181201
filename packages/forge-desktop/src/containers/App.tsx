import React, { FunctionComponent } from 'react';
import Background from '../components/layouts/Background';
import mainRoutes from '../routes/mainRoutes';
import Topbar from './menus/Topbar';

const Routes = mainRoutes.render();

export interface IAppProps {}

const App: FunctionComponent<IAppProps> = () => (
  <Background>
    <Topbar />
    <Routes />
  </Background>
);

export default App;
