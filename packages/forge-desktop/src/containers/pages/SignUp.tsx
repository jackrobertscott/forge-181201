import React, { FunctionComponent, useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { Terminal } from 'lumbridge';
import SignUpForm from '../../components/forms/SignUpForm';
import apolloPersistor from '../../persistors/apolloPersistor';
import authStore from '../../stores/authStore';

export const signUpMutation = apolloPersistor.instance({
  name: 'mutate',
  map: ({ ...args }) => ({
    ...args,
    mutation: gql`
      mutation SignUp($username: String!, $password: String!, $email: String!) {
        authCreateCustom(
          username: $username
          password: $password
          email: $email
        ) {
          token
          userId
        }
      }
    `,
  }),
});

export interface ISignUpProps {}

const SignUp: FunctionComponent<ISignUpProps> = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [serverErrors, setServerErrors] = useState<Error | null>(null);
  useEffect(() => {
    const unwatch = signUpMutation.watch({
      data: ({ authCreateCustom }) => {
        authStore.dispatch.patch(authCreateCustom);
        Terminal.navigate('/');
      },
      catch: error => setServerErrors(error || null),
      status: status => setLoading(status.loading),
    });
    return () => unwatch();
  }, []);
  const data = {
    loading,
    serverErrors,
  };
  const handlers = {
    submit: (formData: any) => signUpMutation.execute({ variables: formData }),
  };
  return <SignUpForm data={data} handlers={handlers} />;
};

export default SignUp;
