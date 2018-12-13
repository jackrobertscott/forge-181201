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
          name
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

const CreateBundle: FunctionComponent<ICreateBundleProps> = ({
  handlers: bundleHandlers,
}) => {
  const { error, loading } = useInstance(createBundleMutation);
  useEffect(() => {
    const unwatch = createBundleMutation.watch({
      data: ({ addBundle }) => addBundle && bundleHandlers.choose(addBundle),
    });
    return () => unwatch();
  });
  const data = {
    prefill: {},
    error,
    loading,
  };
  const handlers = {
    submit: ({ name, readme }: any) =>
      createBundleMutation.execute({
        variables: {
          input: { name, readme },
        },
      }),
  };
  return <BundleForm data={data} handlers={handlers} />;
};

export default CreateBundle;
