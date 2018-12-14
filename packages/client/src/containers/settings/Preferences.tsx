import React, { FunctionComponent, useEffect } from 'react';
import gql from 'graphql-tag';
import PreferencesForm from '../../components/forms/PreferencesForm';
import List from '../../components/layouts/List';
import Title from '../../components/texts/Title';
import apolloPersistor from '../../persistors/apolloPersistor';
import useInstanceSuccess from '../effects/useInstanceSuccess';
import useInstance from '../effects/useInstance';
import useInstanceExecute from '../effects/useInstanceExecute';

export const getUserQuery = apolloPersistor.instance({
  name: 'query',
  map: ({ ...args }) => ({
    ...args,
    query: gql`
      query GetUser {
        me {
          id
          hash
          name
          username
          email
          createdAt
          updatedAt
          isSubscribed
          preferences {
            shortcutOpen
          }
        }
      }
    `,
  }),
});

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
  const {
    data: { me },
  } = useInstanceExecute(getUserQuery);
  const { loading, error } = useInstance(editPreferencesMutation);
  useInstanceSuccess(editPreferencesMutation);
  useEffect(() => {
    const unwatch = editPreferencesMutation.watch({
      data: () => getUserQuery.execute(), // being watched in App.tsx
    });
    return () => unwatch();
  }, []);
  const data = {
    prefill: me ? me.preferences : {},
    loading,
    error,
  };
  const handlers = {
    submit: ({ shortcutOpen }: any) =>
      editPreferencesMutation.execute({
        variables: { input: { preferences: { shortcutOpen } } },
      }),
  };
  if (!me) {
    return null;
  }
  return (
    <List>
      <Title>Preferences</Title>
      <br />
      <PreferencesForm data={data} handlers={handlers} />
    </List>
  );
};

export default Preferences;
