import React, { FunctionComponent } from 'react';
import Background from '../components/layouts/Background';
import MainRoutes from './routes/MainRoutes';
import Topbar from './menus/Topbar';

export interface IDashboardProps {}

const Dashboard: FunctionComponent<IDashboardProps> = () => (
  <Background>
    <Topbar />
    <MainRoutes />
  </Background>
);

export default Dashboard;
