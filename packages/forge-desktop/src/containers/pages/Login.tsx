import React, { FunctionComponent, useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { Terminal } from 'lumbridge';
import LoginForm from '../../components/forms/LoginForm';
import apolloPersistor from '../../persistors/apolloPersistor';
import authStore from '../../stores/authStore';

export const loginMutation = apolloPersistor.instance({
  name: 'mutate',
  map: ({ ...args }) => ({
    ...args,
    mutation: gql`
      mutation Login($username: String!, $password: String!) {
        authLoginCustom(username: $username, password: $password) {
          token
          userId
        }
      }
    `,
  }),
});

export interface ILoginProps {}

const Login: FunctionComponent<ILoginProps> = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [serverErrors, setServerErrors] = useState<Error | null>(null);
  useEffect(() => {
    const unwatch = loginMutation.watch({
      data: ({ authLoginCustom }) => {
        authStore.dispatch.patch(authLoginCustom);
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
    submit: (formData: any) => loginMutation.execute({ variables: formData }),
  };
  return <LoginForm data={data} handlers={handlers} />;
};

export default Login;
