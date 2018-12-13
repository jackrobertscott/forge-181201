import React, { FunctionComponent } from 'react';
import gql from 'graphql-tag';
import Marketplace from '../../components/layouts/Marketplace';
import apolloPersistor from '../../persistors/apolloPersistor';
import useInstanceExecute from '../effects/useInstanceExecute';

// {
//   id: '123',
//   name: 'React',
//   codeCount: 10,
//   readme:
//     'This is a simple description about the bundle that will help users understand what it is.',
// },

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
      console.log('TODO: sign up a person to this bundle...');
    },
  };
  return <Marketplace data={data} handlers={handlers} />;
};

export default Market;
