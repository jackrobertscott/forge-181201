import React, { FunctionComponent } from 'react';
import MembershipModal from '../../components/modals/MembershipModal';
import { IToggle } from '../../components/statefuls/Toggle';
import Button from '../../components/buttons/Button';

export interface IMembershipProps {}

const Membership: FunctionComponent<IMembershipProps> = () => {
  const button = ({ open }: IToggle) => <Button onClick={open}>Choose</Button>;
  return <MembershipModal>{button}</MembershipModal>;
};

export default Membership;
