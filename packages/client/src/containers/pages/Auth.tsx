import React, { FunctionComponent } from 'react';
import ChooseAuth from '../../components/menus/ChooseAuth';

export interface IAuthProps {}

const Auth: FunctionComponent<IAuthProps> = () => {
  return <ChooseAuth />;
};

export default Auth;
