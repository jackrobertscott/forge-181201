import React, { FunctionComponent } from 'react';
import List from '../../components/layouts/List';
import Title from '../../components/texts/Title';
import Control from '../../components/inputs/Control';
import Button from '../../components/buttons/Button';

interface IAccountsProps {}

const Accounts: FunctionComponent<IAccountsProps> = () => {
  const GitHub = ({ ...args }) => <Button {...args}>Connect to GitHub</Button>;
  const Twitter = ({ ...args }) => (
    <Button {...args}>Connect to Twitter</Button>
  );
  return (
    <List>
      <Title>Accounts</Title>
      <br />
      <List wide="true">
        <Control
          label="GitHub"
          help="Make logging in easier by connecting to GitHub."
          auto="right"
          input={GitHub}
        />
        <Control
          label="Twitter"
          help="Send tweets from Forge for fun times."
          auto="right"
          input={Twitter}
        />
      </List>
    </List>
  );
};

export default Accounts;
