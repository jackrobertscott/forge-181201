import React, { FunctionComponent } from 'react';
import LoginForm from '../../components/forms/LoginForm';

export interface ILoginProps {}

const Login: FunctionComponent<ILoginProps> = () => {
  const data = {
    loading: false,
  };
  const handlers = {
    submit: () => null,
  };
  return <LoginForm data={data} handlers={handlers} />;
};

export default Login;
