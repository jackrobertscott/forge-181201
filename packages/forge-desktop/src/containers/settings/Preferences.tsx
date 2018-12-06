import React, { FunctionComponent } from 'react';
import List from '../../components/layouts/List';
import Title from '../../components/texts/Title';
import Control from '../../components/inputs/Control';
import GoodButton from '../../components/buttons/GoodButton';

interface IPreferencesProps {}

const Preferences: FunctionComponent<IPreferencesProps> = () => (
  <List>
    <Title>Preferences</Title>
    <br />
    <Control
      label="Name"
      help="Your full name."
      placeholder="E.g. Fred Blogs"
    />
    <GoodButton auto="right">Save</GoodButton>
  </List>
);

export default Preferences;
