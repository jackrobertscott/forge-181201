import React, { FunctionComponent } from 'react';
import SignUpForm from '../../components/forms/SignUpForm';

export interface ISignUpProps {}

const SignUp: FunctionComponent<ISignUpProps> = () => {
  const data = {
    loading: false,
  };
  const handlers = {
    submit: () => null,
  };
  return <SignUpForm data={data} handlers={handlers} />;
};

export default SignUp;
