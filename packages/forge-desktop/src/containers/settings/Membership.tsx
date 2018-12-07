import React, { FunctionComponent } from 'react';
import List from '../../components/layouts/List';
import Title from '../../components/texts/Title';
import CardForm from '../../components/forms/CardForm';
import { Elements } from 'react-stripe-elements';

export interface IMembershipProps {}

const Membership: FunctionComponent<IMembershipProps> = () => {
  const data = {
    loading: false,
    prefill: {
      name: '',
    },
  };
  const handlers = {
    submit: () => null,
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
