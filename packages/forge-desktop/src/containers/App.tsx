import React, { Component } from 'react';
import Button from '../components/buttons/Button';
import GoodButton from '../components/buttons/GoodButton';
import BadButton from '../components/buttons/BadButton';

class App extends Component {
  public render() {
    return (
      <div>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button>Hello</Button>
        <br />
        <GoodButton>Hello</GoodButton>
        <br />
        <BadButton>Hello</BadButton>
      </div>
    );
  }
}

export default App;
