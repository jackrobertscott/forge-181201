import React, { Component } from 'react';
import Background from '../components/layouts/Background';
import Header from '../components/menus/Header';
import MainRoutes from './routes/MainRoutes';

class App extends Component {
  public render() {
    return (
      <Background>
        <Header />
        <MainRoutes />
      </Background>
    );
  }
}

export default App;
