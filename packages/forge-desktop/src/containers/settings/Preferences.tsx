import React, { FunctionComponent } from 'react';
import PreferencesForm from '../../components/forms/PreferencesForm';
import List from '../../components/layouts/List';
import Title from '../../components/texts/Title';

interface IPreferencesProps {}

const Preferences: FunctionComponent<IPreferencesProps> = () => {
  const data = {
    preferences: {
      shortcutOpen: '',
    },
    loading: false,
  };
  const handlers = {
    submit: () => null,
  };
  return (
    <List>
      <Title>Preferences</Title>
      <br />
      <PreferencesForm data={data} handlers={handlers} />
    </List>
  );
};

export default Preferences;
