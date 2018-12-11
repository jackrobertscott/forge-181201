import React, { FunctionComponent, useState, useEffect } from 'react';
import gql from 'graphql-tag';
import SignUpForm from '../../components/forms/SignUpForm';
import apolloPersistor from '../../persistors/apolloPersistor';

export const loginQuery = apolloPersistor.instance({
  name: 'query',
  map: ({ ...args }) => ({
    ...args,
    query: gql`
      query SignUp($username: String, $password: String, $email: String) {
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
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    loginQuery.watch({
      data: (...args: any[]) => console.log(args),
      catch: (...args: any[]) => console.error(args),
      status: ({ loading: loadingStatus }) => setLoading(loadingStatus),
    });
  }, []);
  const data = {
    loading,
  };
  const handlers = {
    submit: (formData: any) => loginQuery.execute({ variables: formData }),
  };
  return <SignUpForm data={data} handlers={handlers} />;
};

export default SignUp;
