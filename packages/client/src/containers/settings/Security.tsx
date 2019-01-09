import React, { FunctionComponent } from 'react';
import gql from 'graphql-tag';
import PasswordForm from '../../components/forms/PasswordForm';
import List from '../../components/layouts/List';
import Title from '../../components/texts/Title';
import apolloPersistor from '../../utils/apolloPersistor';
import useInstanceSuccess from '../../effects/useInstanceSuccess';
import useInstance from '../../effects/useInstance';

export const updateUserPasswordMutation = apolloPersistor.instance({
  name: 'mutate',
  map: ({ ...args }) => ({
    ...args,
    mutation: gql`
      mutation UpdatePassword($oldPassword: String!, $newPassword: String!) {
        authPasswordChangeCustom(
          oldPassword: $oldPassword
          newPassword: $newPassword
        ) {
          token
          userId
        }
      }
    `,
  }),
});

export interface ISecurityProps {}

const Security: FunctionComponent<ISecurityProps> = () => {
  const { loading, error } = useInstance(updateUserPasswordMutation);
  useInstanceSuccess(updateUserPasswordMutation);
  const data = {
    prefill: {},
    loading,
    error,
  };
  const handlers = {
    submit: ({ oldPassword, newPassword }: any) =>
      updateUserPasswordMutation.execute({
        variables: { oldPassword, newPassword },
      }),
  };
  return (
    <List>
      <Title>Security</Title>
      <br />
      <PasswordForm data={data} handlers={handlers} />
    </List>
  );
};

export default Security;
