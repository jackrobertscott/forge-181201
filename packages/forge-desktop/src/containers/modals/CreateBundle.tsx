import React, { FunctionComponent, useEffect } from 'react';
import gql from 'graphql-tag';
import apolloPersistor from '../../persistors/apolloPersistor';
import useInstance from '../effects/useInstance';
import BundleForm from '../../components/forms/BundleForm';

export const createBundleMutation = apolloPersistor.instance({
  name: 'mutate',
  map: ({ ...args }) => ({
    ...args,
    mutation: gql`
      mutation CreateBundle($input: BundleInput!) {
        addBundle(input: $input) {
          id
        }
      }
    `,
  }),
});

export interface ICreateBundleProps {
  handlers: {
    choose: (...args: any[]) => any;
  };
}

const CreateBundle: FunctionComponent<ICreateBundleProps> = props => {
  const { error, loading } = useInstance(createBundleMutation);
  useEffect(() => {
    createBundleMutation.watch({
      data: ({ addBundle }) => props.handlers.choose(addBundle),
    });
  });
  const data = {
    prefill: {},
    error,
    loading,
  };
  const handlers = {
    submit: (formData: any) =>
      createBundleMutation.execute({
        variables: {
          input: formData,
        },
      }),
  };
  return <BundleForm data={data} handlers={handlers} />;
};

export default CreateBundle;
