import React, { FunctionComponent } from 'react';
import ChooseBundleModal from '../../components/modals/ChooseBundleModal';
import { IToggle } from '../../components/statefuls/Toggle';
import Button from '../../components/buttons/Button';

interface IChooseBundleProps {}

const ChooseBundle: FunctionComponent<IChooseBundleProps> = () => {
  const button = ({ open }: IToggle) => <Button onClick={open}>Choose</Button>;
  return <ChooseBundleModal>{button}</ChooseBundleModal>;
};

export default ChooseBundle;
