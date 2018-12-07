import React, { FunctionComponent } from 'react';
import SignInModal from '../../components/modals/SignInModal';
import { IToggle } from '../../components/statefuls/Toggle';
import Button from '../../components/buttons/Button';

export interface ISignInProps {}

const SignIn: FunctionComponent<ISignInProps> = () => {
  const button = ({ open }: IToggle) => <Button onClick={open}>Choose</Button>;
  return <SignInModal>{button}</SignInModal>;
};

export default SignIn;
