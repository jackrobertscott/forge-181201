import React, { FunctionComponent } from 'react';
import gql from 'graphql-tag';
import PreferencesForm from '../../components/forms/PreferencesForm';
import List from '../../components/layouts/List';
import Title from '../../components/texts/Title';
import apolloPersistor from '../../persistors/apolloPersistor';
import useInstanceSuccess from '../effects/useInstanceSuccess';
import useInstance from '../effects/useInstance';

export const editPreferencesMutation = apolloPersistor.instance({
  name: 'mutate',
  map: ({ ...args }) => ({
    ...args,
    mutation: gql`
      mutation EditUserPreferences($input: UserInput!) {
        editMe(input: $input) {
          id
        }
      }
    `,
  }),
});

export interface IPreferencesProps {}

const Preferences: FunctionComponent<IPreferencesProps> = () => {
  const { loading, error } = useInstance(editPreferencesMutation);
  useInstanceSuccess(editPreferencesMutation);
  const data = {
    prefill: {
      shortcutOpen: '',
    },
    loading,
    error,
  };
  const handlers = {
    submit: (formData: any) =>
      editPreferencesMutation.execute({ variables: { preferences: formData } }),
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
