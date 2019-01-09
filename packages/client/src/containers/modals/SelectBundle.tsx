import React, { FunctionComponent } from 'react';
import gql from 'graphql-tag';
import apolloPersistor from '../../utils/apolloPersistor';
import useInstanceExecute from '../../effects/useInstanceExecute';
import ChooseBundle from '../../components/lists/ChooseBundle';

export const bundleListQuery = apolloPersistor.instance({
  name: 'query',
  map: ({ ...args }) => ({
    ...args,
    query: gql`
      query ListBundles {
        userBundles {
          id
          name
        }
      }
    `,
  }),
});

export interface ISelectBundleProps {
  handlers: {
    choose: (...args: any[]) => any;
  };
}

const SelectBundle: FunctionComponent<ISelectBundleProps> = ({ handlers }) => {
  const {
    data: { userBundles },
    error,
    loading,
  } = useInstanceExecute(bundleListQuery);
  const data = {
    bundles: userBundles || [],
    error,
    loading,
  };
  return <ChooseBundle data={data} handlers={handlers} />;
};

export default SelectBundle;
