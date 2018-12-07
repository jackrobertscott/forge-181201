import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';
import { IComponentProps } from '../../utils/components';
import Split from '../layouts/Split';
import Card from '../cards/Card';
import Modal from '../layouts/Modal';
import { IToggle } from '../statefuls/Toggle';
import Button from '../buttons/Button';

export interface IMembershipModalProps extends IComponentProps {
  children: ReactNode;
}

const MembershipModal: FunctionComponent<IMembershipModalProps> = ({
  children,
}) => {
  const modal = (
    <Split modal={true}>
      <Card>{children}</Card>
      <Card>Hello world!</Card>
    </Split>
  );
  const button = ({ open }: IToggle) => <Button onClick={open}>Choose</Button>;
  return <Modal component={modal}>{button}</Modal>;
};

export default MembershipModal;
