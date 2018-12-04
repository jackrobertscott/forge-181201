import React, { Component } from 'react';
import Button from '../components/buttons/Button';
import GoodButton from '../components/buttons/GoodButton';
import BadButton from '../components/buttons/BadButton';
import Card from '../components/cards/Card';
import Background from '../components/layouts/Background';
import Header from '../components/menus/Header';

class App extends Component {
  public render() {
    return (
      <Background>
        <Header />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Card>
          <Button>Hello</Button>
          <br />
          <GoodButton>Hello</GoodButton>
          <br />
          <BadButton>Hello</BadButton>
        </Card>
      </Background>
    );
  }
}

export default App;
