import React, { FunctionComponent } from 'react';
import ProfileForm from '../../components/forms/ProfileForm';

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
  return <ProfileForm data={data} handlers={handlers} />;
};

export default Profile;
