import React, { Component } from 'react';
import Button from '../components/buttons/Button';
import GoodButton from '../components/buttons/GoodButton';
import BadButton from '../components/buttons/BadButton';
import Card from '../components/cards/Card';
import Background from '../components/layouts/Background';
import Header from '../components/menus/Header';
import Split from '../components/layouts/Split';

class App extends Component {
  public render() {
    return (
      <Background>
        <Header />
        <Split sidebar={this.renderSidebar()}>
          <Card>
            <Button>Hello</Button>
            <br />
            <GoodButton>Hello</GoodButton>
            <br />
            <BadButton>Hello</BadButton>
          </Card>
        </Split>
      </Background>
    );
  }
  private renderSidebar = (): React.ReactNode => {
    return (
      <Card>
        <Button>Hello</Button>
        <br />
        <GoodButton>Hello</GoodButton>
        <br />
        <BadButton>Hello</BadButton>
      </Card>
    );
  };
}

export default App;
