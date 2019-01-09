import React, { FunctionComponent } from 'react';
import gql from 'graphql-tag';
import Marketplace from '../../components/layouts/Marketplace';
import apolloPersistor from '../../utils/apolloPersistor';
import useInstanceExecute from '../effects/useInstanceExecute';

export const getMarketBundles = apolloPersistor.instance({
  name: 'query',
  map: ({ ...args }) => ({
    ...args,
    query: gql`
      query GetMarketBundles {
        marketBundles {
          id
          name
          readme
        }
      }
    `,
  }),
});

export interface IMarketProps {}

const Market: FunctionComponent<IMarketProps> = () => {
  const {
    data: { marketBundles },
    error,
    loading,
  } = useInstanceExecute(getMarketBundles);
  const data = {
    bundles: marketBundles || [],
  };
  const handlers = {
    subscribe: () => {
      // TODO: sign up a person to this bundle...
    },
  };
  return <Marketplace data={data} handlers={handlers} />;
};

export default Market;
