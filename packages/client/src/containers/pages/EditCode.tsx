import React, { FunctionComponent, useEffect, useState } from 'react';
import gql from 'graphql-tag';
import queryString from 'query-string';
import CodeForm from '../../components/forms/CodeForm';
import apolloPersistor from '../../utils/apolloPersistor';
import useInstanceSuccess from '../effects/useInstanceSuccess';
import useInstance from '../effects/useInstance';
import { Terminal } from 'lumbridge';

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

export interface IEditCodeProps {}

const EditCode: FunctionComponent<IEditCodeProps> = () => {
  const [code, setCode] = useState<any>(null);
  useEffect(() => {
    const unwatch = getCodeQuery.watch({
      data: ({ code: prefill }) => setCode(prefill),
    });
    return () => unwatch();
  }, []);
  useEffect(() => {
    const { id } = queryString.parse(window.location.search);
    if (!id) {
      setTimeout(() => Terminal.navigate('/'));
    }
    getCodeQuery.execute({ variables: { id } });
  }, []);
  const { error, loading } = useInstance(editCodeMutation);
  useInstanceSuccess(editCodeMutation);
  const data = {
    prefill: code,
    error,
    loading,
    title: 'Edit Code',
    nobundle: true,
  };
  const handlers = {
    submit: ({ name, shortcut, contents }: any) =>
      editCodeMutation.execute({
        variables: {
          id: code.id,
          input: { name, shortcut, contents },
        },
      }),
  };
  return !code ? null : <CodeForm data={data} handlers={handlers} />;
};

export default EditCode;
