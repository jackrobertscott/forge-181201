import React, { FunctionComponent, useState } from 'react';
import { IComponentProps } from '../../utils/components';
import Split from '../layouts/Split';
import Card from '../cards/Card';
import Modal from '../layouts/Modal';
import { IToggle } from '../statefuls/Toggle';
import Title from '../texts/Title';
import Subtitle from '../texts/Subtitle';
import List from '../layouts/List';
import SelectBundle from '../../containers/modals/SelectBundle';
import CreateBundle from '../../containers/modals/CreateBundle';
import Button from '../buttons/Button';

export interface IBundle {
  id: string;
  name: string;
  codeCount: number;
}

export interface IBundleModalProps extends IComponentProps {
  handlers: {
    choose: (bundle: IBundle) => any;
  };
}

const BundleModal: FunctionComponent<IBundleModalProps> = ({
  handlers: bundleHandlers,
}) => {
  const [currentBundle, setCurrentBundle] = useState<any>(null);
  const modal = ({ close }: IToggle) => {
    const handlers = {
      choose: (bundle: any) => {
        setCurrentBundle(bundle);
        bundleHandlers.choose(bundle);
        close();
      },
    };
    return (
      <Split modal={true} middle={true}>
        <List>
          <Card style={{ flexGrow: 0 }}>
            <Title>Select Bundle</Title>
            <Subtitle>Create or select a bundle.</Subtitle>
          </Card>
          <SelectBundle handlers={handlers} />
        </List>
        <Card style={{ flexGrow: 0 }}>
          <Title>Create Bundle</Title>
          <br />
          <CreateBundle handlers={handlers} />
        </Card>
      </Split>
    );
  };
  const button = ({ open }: IToggle) => (
    <Button onClick={open}>
      {currentBundle ? currentBundle.name : 'Choose'}
    </Button>
  );
  return <Modal component={modal}>{button}</Modal>;
};

export default BundleModal;
