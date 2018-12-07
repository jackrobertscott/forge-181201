import React, { FunctionComponent } from 'react';
import ProfileForm from '../../components/forms/ProfileForm';
import List from '../../components/layouts/List';
import Title from '../../components/texts/Title';

interface IProfileProps {}

const Profile: FunctionComponent<IProfileProps> = () => {
  const data = {
    profile: {
      name: '',
    },
    loading: false,
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
