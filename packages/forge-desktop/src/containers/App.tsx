import React, { Component } from 'react';
import Background from '../components/layouts/Background';
import Header from '../components/menus/Header';
import MainRoutes from './routes/MainRoutes';
import ErrorCatch from './pages/ErrorCatch';

class App extends Component {
  public render() {
    return (
      <ErrorCatch>
        <Background>
          <Header />
          <MainRoutes />
        </Background>
      </ErrorCatch>
    );
  }
}

export default App;
