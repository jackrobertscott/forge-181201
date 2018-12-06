import React, { FunctionComponent } from 'react';
import CodeForm from '../../components/forms/CodeForm';

interface ICreateCodeProps {}

const CreateCode: FunctionComponent<ICreateCodeProps> = () => {
  const data = {
    title: 'Create Code',
    code: {},
    loading: false,
  };
  const handlers = {
    goback: () => null,
    submit: () => null,
  };
  return <CodeForm data={data} handlers={handlers} />;
};

export default CreateCode;
