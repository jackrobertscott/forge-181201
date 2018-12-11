import React, { FunctionComponent } from 'react';
import Onboard from '../../components/layouts/Onboard';

export interface ICreateCodeProps {}

const CreateCode: FunctionComponent<ICreateCodeProps> = () => {
  const data = {
    loading: false,
  };
  const handlers = {
    submit: () => null,
  };
  return <Onboard data={data} handlers={handlers} />;
};

export default CreateCode;
