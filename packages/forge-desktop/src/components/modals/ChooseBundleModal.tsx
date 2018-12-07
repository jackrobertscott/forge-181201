import React, { FunctionComponent, ReactNode } from 'react';
import { IComponentProps } from '../../utils/components';
import Split from '../layouts/Split';
import Card from '../cards/Card';
import Modal from '../layouts/Modal';
import { IToggle } from '../statefuls/Toggle';
import Title from '../texts/Title';
import Subtitle from '../texts/Subtitle';
import List from '../layouts/List';
import BundleForm, { IBundleFragment } from '../forms/CreateBundle';
import ChooseBundle from '../../components/lists/ChooseBundle';

export interface IBundle {
  id: string;
  name: string;
  codeCount: number;
}

export interface IChooseBundleModalProps extends IComponentProps {
  children: (bag: IToggle) => ReactNode;
  data: {
    loading: boolean;
    prefill: IBundleFragment;
    bundles: IBundle[];
  };
  handlers: {
    submit: (...args: any[]) => any;
    choose: (bundle: IBundle) => any;
  };
}

const ChooseBundleModal: FunctionComponent<IChooseBundleModalProps> = ({
  children,
  data,
  handlers,
}) => {
  const modal = (
    <Split modal={true} middle={true}>
      <List>
        <Card>
          <Title>Select Bundle</Title>
          <Subtitle>Create or select a bundle.</Subtitle>
        </Card>
        <ChooseBundle data={data} handlers={handlers} />
      </List>
      <Card>
        <Title>Create Bundle</Title>
        <br />
        <BundleForm data={data} handlers={handlers} />
      </Card>
    </Split>
  );
  return <Modal component={modal}>{children}</Modal>;
};

export default ChooseBundleModal;
