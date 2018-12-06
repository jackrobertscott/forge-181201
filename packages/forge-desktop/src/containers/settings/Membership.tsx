import React, { FunctionComponent } from 'react';
import List from '../../components/layouts/List';
import Title from '../../components/texts/Title';
import Control from '../../components/inputs/Control';
import GoodButton from '../../components/buttons/GoodButton';

interface IMembershipProps {}

const Membership: FunctionComponent<IMembershipProps> = () => (
  <List>
    <Title>Membership</Title>
    <br />
    <Control
      label="Name"
      help="Your full name."
      placeholder="E.g. Fred Blogs"
    />
    <GoodButton auto="right">Save</GoodButton>
  </List>
);

export default Membership;
