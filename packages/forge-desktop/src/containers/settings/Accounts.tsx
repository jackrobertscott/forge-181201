import React, { FunctionComponent } from 'react';
import List from '../../components/layouts/List';
import Title from '../../components/texts/Title';
import Control from '../../components/inputs/Control';
import Button from '../../components/buttons/Button';

export interface IAccountsProps {}

const Accounts: FunctionComponent<IAccountsProps> = () => {
  const GitHub = ({ ...args }) => <Button {...args}>Connect to GitHub</Button>;
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
      </List>
    </List>
  );
};

export default Accounts;
