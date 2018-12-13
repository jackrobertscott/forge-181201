import React, { FunctionComponent } from 'react';
import gql from 'graphql-tag';
import ProfileForm from '../../components/forms/ProfileForm';
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
          name
          email
        }
      }
    `,
  }),
});

export const editUserMutation = apolloPersistor.instance({
  name: 'mutate',
  map: ({ ...args }) => ({
    ...args,
    mutation: gql`
      mutation EditUser($input: UserInput!) {
        editMe(input: $input) {
          id
        }
      }
    `,
  }),
});

export interface IProfileProps {}

const Profile: FunctionComponent<IProfileProps> = () => {
  const {
    data: { me },
  } = useInstanceExecute(getUserQuery);
  const { loading, error } = useInstance(editUserMutation);
  useInstanceSuccess(editUserMutation);
  const data = {
    prefill: me,
    loading,
    error,
  };
  const handlers = {
    submit: ({ name, email }: any) =>
      editUserMutation.execute({ variables: { input: { name, email } } }),
  };
  if (!me) {
    return null;
  }
  return (
    <List>
      <Title>Profile</Title>
      <br />
      <ProfileForm data={data} handlers={handlers} />
    </List>
  );
};

export default Profile;
