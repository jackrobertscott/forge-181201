import React, { Component, ReactNode } from 'react';
import Button from '../components/buttons/Button';
import GoodButton from '../components/buttons/GoodButton';
import BadButton from '../components/buttons/BadButton';
import Card from '../components/cards/Card';
import Background from '../components/layouts/Background';
import Header from '../components/menus/Header';
import Split from '../components/layouts/Split';
import Editor from '../components/editors/Editor';

class App extends Component {
  public render() {
    return (
      <Background>
        <Header />
        <Split sidebar={this.renderSidebar()}>
          <Card>
            <Editor />
          </Card>
        </Split>
      </Background>
    );
  }
  private renderSidebar = (): ReactNode => {
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
