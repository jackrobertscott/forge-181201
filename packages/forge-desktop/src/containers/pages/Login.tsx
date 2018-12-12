import React, { FunctionComponent, useState, useEffect } from 'react';
import gql from 'graphql-tag';
import LoginForm from '../../components/forms/LoginForm';
import apolloPersistor from '../../persistors/apolloPersistor';

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
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    loginMutation.watch({
      data: (...args: any[]) => console.log(args),
      catch: (...args: any[]) => console.error(args),
      status: ({ loading: loadingStatus }) => setLoading(loadingStatus),
    });
  }, []);
  const data = {
    loading,
  };
  const handlers = {
    submit: (formData: any) => loginMutation.execute({ variables: formData }),
  };
  return <LoginForm data={data} handlers={handlers} />;
};

export default Login;
