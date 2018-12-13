import React, { FunctionComponent } from 'react';
import Background from '../components/layouts/Background';
import mainRoutes from '../routes/mainRoutes';
import Topbar from './menus/Topbar';

const Routes = mainRoutes.render();

export interface IDashboardProps {}

const Dashboard: FunctionComponent<IDashboardProps> = () => (
  <Background>
    <Topbar />
    <Routes />
  </Background>
);

export default Dashboard;
