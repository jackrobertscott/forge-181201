import React, { FunctionComponent } from 'react';
import authRoutes from '../routes/authRoutes';

const Routes = authRoutes.render();

export interface IAppProps {}

const App: FunctionComponent<IAppProps> = () => <Routes />;

export default App;
