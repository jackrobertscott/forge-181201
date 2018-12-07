import React, { FunctionComponent } from 'react';
import CodeForm from '../../components/forms/CodeForm';

export interface ICreateCodeProps {}

const CreateCode: FunctionComponent<ICreateCodeProps> = () => {
  const data = {
    title: 'Create Code',
    code: {},
    loading: false,
  };
  const handlers = {
    submit: () => null,
  };
  return <CodeForm data={data} handlers={handlers} />;
};

export default CreateCode;
