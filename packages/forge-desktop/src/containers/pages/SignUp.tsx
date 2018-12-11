import React, { FunctionComponent } from 'react';
import SignUpForm from '../../components/forms/SignUpForm';
import apolloPersistor from '../../persistors/apolloPersistor';

export const loginQuery = apolloPersistor.instance({
  name: 'query',
  map: ({ ...args }) => ({
    ...args,
    query: `
      query SignUp($username: String, $password: String, $email) {
        authCreateCustom(username: $username, password: $password, email: $email) {
          token
          userId
        }
      }
    `,
  }),
});

export interface ISignUpProps {}

const SignUp: FunctionComponent<ISignUpProps> = () => {
  const data = {
    loading: false,
  };
  const handlers = {
    submit: (...args: any[]) => console.log(args),
  };
  return <SignUpForm data={data} handlers={handlers} />;
};

export default SignUp;
