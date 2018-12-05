import React, { Component, ReactNode } from 'react';
import Button from '../components/buttons/Button';
import GoodButton from '../components/buttons/GoodButton';
import BadButton from '../components/buttons/BadButton';
import Card from '../components/cards/Card';
import Background from '../components/layouts/Background';
import Header from '../components/menus/Header';
import Split from '../components/layouts/Split';
import StatusEditor from '../components/editors/StatusEditor';
import SimpleInput from '../components/inputs/SimpleInput';
import Control from '../components/forms/Control';
import LargeInput from '../components/inputs/LargeInput';
import { IToggle } from '../components/statefuls/Toggle';
import Settings from '../components/layouts/Settings';
import ErrorCatch from './pages/ErrorCatch';

class App extends Component {
  public render() {
    return (
      <Background>
        <Header />
        <ErrorCatch />
        <Split sidebar={this.renderSidebar()}>
          <StatusEditor active={true} />
        </Split>
      </Background>
    );
  }
  /**
   * Must be in function or warning thrown.
   */
  private renderSidebar = (): ReactNode => {
    const modalPopup = ({ open }: IToggle) => (
      <Button onClick={open}>Hello</Button>
    );
    return (
      <Card>
        <Control
          label="Name"
          help="Your full name."
          placeholder="E.g. Fred Blogs"
          component={LargeInput}
        />
        <br />
        <Control
          label="Password"
          help="Use something secure."
          error="Your password is not correct."
          placeholder="*********"
          type="password"
          component={SimpleInput}
        />
        <br />
        <Settings
          sidebar={<Card>Sidebar</Card>}
          component={<Card>Hello world!</Card>}
        >
          {modalPopup}
        </Settings>
        <br />
        <GoodButton>Hello</GoodButton>
        <br />
        <BadButton>Hello</BadButton>
      </Card>
    );
  };
}

export default App;
