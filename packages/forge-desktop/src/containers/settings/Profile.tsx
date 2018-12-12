import React, { FunctionComponent } from 'react';
import gql from 'graphql-tag';
import ProfileForm from '../../components/forms/ProfileForm';
import List from '../../components/layouts/List';
import Title from '../../components/texts/Title';
import apolloPersistor from '../../persistors/apolloPersistor';
import useInstanceSuccess from '../effects/useInstanceSuccess';
import useInstance from '../effects/useInstance';

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
  const { loading, error } = useInstance(editUserMutation);
  useInstanceSuccess(editUserMutation);
  const data = {
    prefill: {
      name: '',
    },
    loading,
    error,
  };
  const handlers = {
    submit: () => null,
  };
  return (
    <List>
      <Title>Profile</Title>
      <br />
      <ProfileForm data={data} handlers={handlers} />
    </List>
  );
};

export default Profile;
