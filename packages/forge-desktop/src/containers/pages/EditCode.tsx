import React, { FunctionComponent } from 'react';
import CodeForm from '../../components/forms/CodeForm';
import apolloPersistor from '../../persistors/apolloPersistor';
import gql from 'graphql-tag';
import useInstanceExecute from '../effects/useInstanceExecute';
import useInstanceSuccess from '../effects/useInstanceSuccess';
import useInstance from '../effects/useInstance';

export const getCodeQuery = apolloPersistor.instance({
  name: 'query',
  map: ({ ...args }) => ({
    ...args,
    query: gql`
      query GetCode($id: String!) {
        code(id: $id) {
          id
          name
          shortcut
          contents
          bundleId
        }
      }
    `,
  }),
});

export const editCodeMutation = apolloPersistor.instance({
  name: 'mutate',
  map: ({ ...args }) => ({
    ...args,
    mutation: gql`
      mutation EditCode($id: String!, $input: CodeInput!) {
        editCode(id: $id, input: $input) {
          id
        }
      }
    `,
  }),
});

export interface ICreateCodeProps {}

const CreateCode: FunctionComponent<ICreateCodeProps> = () => {
  const {
    data: { code },
  } = useInstanceExecute(getCodeQuery);
  const { error, loading } = useInstance(editCodeMutation);
  useInstanceSuccess(editCodeMutation);
  const data = {
    code,
    error,
    loading,
    title: 'Edit Code',
  };
  const handlers = {
    submit: (formData: any) =>
      editCodeMutation.execute({
        variables: {
          id: code.id,
          input: formData,
        },
      }),
  };
  if (code) {
    return <CodeForm data={data} handlers={handlers} />;
  }
  return null;
};

export default CreateCode;
