import React, { FunctionComponent } from 'react';
import ChooseBundleModal from '../../components/modals/ChooseBundleModal';
import { IToggle } from '../../components/statefuls/Toggle';
import Button from '../../components/buttons/Button';

const fakeBundles = [
  { id: '123', name: 'React', codeCount: 8 },
  { id: '324', name: 'Vue.js', codeCount: 8 },
  { id: '345', name: 'Angular', codeCount: 8 },
  { id: '645', name: 'Console', codeCount: 8 },
  { id: '276', name: 'React', codeCount: 8 },
  { id: '243', name: 'Vue.js', codeCount: 8 },
  { id: '563', name: 'Angular', codeCount: 8 },
  { id: '654', name: 'Console', codeCount: 8 },
  { id: '123a', name: 'React', codeCount: 8 },
  { id: '324a', name: 'Vue.js', codeCount: 8 },
  { id: '345a', name: 'Angular', codeCount: 8 },
  { id: '645a', name: 'Console', codeCount: 8 },
  { id: '276a', name: 'React', codeCount: 8 },
  { id: '243a', name: 'Vue.js', codeCount: 8 },
  { id: '563a', name: 'Angular', codeCount: 8 },
  { id: '654a', name: 'Console', codeCount: 8 },
];

export interface IChooseBundleProps {}

const ChooseBundle: FunctionComponent<IChooseBundleProps> = () => {
  const data = {
    prefill: {},
    bundles: fakeBundles,
    loading: false,
  };
  const handlers = {
    submit: () => null,
    choose: () => null,
  };
  const button = ({ open }: IToggle) => <Button onClick={open}>Choose</Button>;
  return (
    <ChooseBundleModal data={data} handlers={handlers}>
      {button}
    </ChooseBundleModal>
  );
};

export default ChooseBundle;
