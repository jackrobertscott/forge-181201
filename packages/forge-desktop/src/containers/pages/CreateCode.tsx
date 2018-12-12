import React, { FunctionComponent, useEffect } from 'react';
import { Terminal } from 'lumbridge';
import gql from 'graphql-tag';
import CodeForm from '../../components/forms/CodeForm';
import apolloPersistor from '../../persistors/apolloPersistor';
import useInstance from '../effects/useInstance';

export const createCodeMutation = apolloPersistor.instance({
  name: 'mutate',
  map: ({ ...args }) => ({
    ...args,
    mutation: gql`
      mutation CreateCode($input: CodeInput!) {
        addCode(input: $input) {
          id
        }
      }
    `,
  }),
});

export interface ICreateCodeProps {}

const CreateCode: FunctionComponent<ICreateCodeProps> = () => {
  const { error, loading } = useInstance(createCodeMutation);
  useEffect(() => {
    createCodeMutation.watch({
      data: ({ addCode }) => {
        if (addCode) {
          setTimeout(() => Terminal.navigate('/'));
        }
      },
    });
  });
  const data = {
    title: 'Create Code',
    code: {},
    error,
    loading,
  };
  const handlers = {
    submit: (formData: any) =>
      createCodeMutation.execute({
        variables: {
          bundleId: formData.bundleId,
          input: formData,
        },
      }),
  };
  return <CodeForm data={data} handlers={handlers} />;
};

export default CreateCode;
