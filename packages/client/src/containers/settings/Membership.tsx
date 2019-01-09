import React, { FunctionComponent } from 'react';
import { Elements } from 'react-stripe-elements';
import gql from 'graphql-tag';
import List from '../../components/layouts/List';
import Title from '../../components/texts/Title';
import CardForm from '../../components/forms/CardForm';
import apolloPersistor from '../../utils/apolloPersistor';
import useInstance from '../effects/useInstance';
import useInstanceSuccess from '../effects/useInstanceSuccess';

export const createMembershipMutation = apolloPersistor.instance({
  name: 'mutate',
  map: ({ ...args }) => ({
    ...args,
    mutation: gql`
      mutation CreateMembership($token: String!) {
        subscribeUser(token: $token) {
          id
        }
      }
    `,
  }),
});

export interface IMembershipProps {}

const Membership: FunctionComponent<IMembershipProps> = () => {
  const { loading, error } = useInstance(createMembershipMutation);
  useInstanceSuccess(createMembershipMutation);
  const data = {
    prefill: {
      name: '',
    },
    loading,
    error,
  };
  const handlers = {
    submit: ({ token }: { token: string }) =>
      createMembershipMutation.execute({ variables: { token } }),
  };
  return (
    <List>
      <Title>Membership</Title>
      <br />
      <Elements>
        <CardForm data={data} handlers={handlers} />
      </Elements>
    </List>
  );
};

export default Membership;
