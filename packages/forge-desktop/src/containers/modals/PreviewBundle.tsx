import React, { FunctionComponent } from 'react';
import PreviewBundleModal from '../../components/modals/PreviewBundleModal';
import { IToggle } from '../../components/statefuls/Toggle';
import Button from '../../components/buttons/Button';

interface IPreviewBundleProps {}

const PreviewBundle: FunctionComponent<IPreviewBundleProps> = () => {
  const button = ({ open }: IToggle) => <Button onClick={open}>Choose</Button>;
  return <PreviewBundleModal>{button}</PreviewBundleModal>;
};

export default PreviewBundle;
