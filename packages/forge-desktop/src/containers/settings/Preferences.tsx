import React, { FunctionComponent } from 'react';
import PreferencesForm from '../../components/forms/PreferencesForm';

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
  return <PreferencesForm data={data} handlers={handlers} />;
};

export default Preferences;
