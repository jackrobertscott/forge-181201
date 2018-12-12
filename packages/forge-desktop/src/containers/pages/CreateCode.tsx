import React, { FunctionComponent } from 'react';
import { Terminal } from 'lumbridge';
import gql from 'graphql-tag';
import CodeForm from '../../components/forms/CodeForm';
import apolloPersistor from '../../persistors/apolloPersistor';
import useInstance from '../effects/useInstance';
import useInstanceSuccess from '../effects/useInstanceSuccess';

export const createCodeMutation = apolloPersistor.instance({
  name: 'mutate',
  map: ({ ...args }) => ({
    ...args,
    mutation: gql`
      mutation CreateCode($bundleId: String!, $input: CodeInput!) {
        addCode(bundleId: $bundleId, input: $input) {
          id
        }
      }
    `,
  }),
});

export interface ICreateCodeProps {}

const CreateCode: FunctionComponent<ICreateCodeProps> = () => {
  const { error, loading } = useInstance(createCodeMutation);
  useInstanceSuccess(createCodeMutation, () => {
    setTimeout(() => Terminal.navigate('/'));
  });
  const data = {
    code: {},
    error,
    loading,
    title: 'Create Code',
  };
  const handlers = {
    submit: ({ bundleId, ...formData }: any) =>
      createCodeMutation.execute({
        variables: {
          bundleId,
          input: formData,
        },
      }),
  };
  return <CodeForm data={data} handlers={handlers} />;
};

export default CreateCode;
