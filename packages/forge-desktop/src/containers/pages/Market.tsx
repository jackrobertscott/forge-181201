import React, { FunctionComponent } from 'react';
import Marketplace from '../../components/layouts/Marketplace';

const fakeBundles = [
  {
    id: '123',
    name: 'React',
    codeCount: 10,
    readme:
      'This is a simple description about the bundle that will help users understand what it is.',
  },
  {
    id: '324',
    name: 'Vue.js',
    codeCount: 10,
    readme:
      'This is a simple description about the bundle that will help users understand what it is.',
  },
  {
    id: '345',
    name: 'Angular',
    codeCount: 10,
    readme:
      'This is a simple description about the bundle that will help users understand what it is.',
  },
  {
    id: '645',
    name: 'Console',
    codeCount: 10,
    readme:
      'This is a simple description about the bundle that will help users understand what it is.',
  },
  {
    id: '276',
    name: 'React',
    codeCount: 10,
    readme:
      'This is a simple description about the bundle that will help users understand what it is.',
  },
  {
    id: '243',
    name: 'Vue.js',
    codeCount: 10,
    readme:
      'This is a simple description about the bundle that will help users understand what it is.',
  },
  {
    id: '563',
    name: 'Angular',
    codeCount: 10,
    readme:
      'This is a simple description about the bundle that will help users understand what it is.',
  },
  {
    id: '654',
    name: 'Console',
    codeCount: 10,
    readme:
      'This is a simple description about the bundle that will help users understand what it is.',
  },
];

export interface IMarketProps {}

const Market: FunctionComponent<IMarketProps> = () => {
  const data = {
    bundles: fakeBundles,
  };
  const handlers = {
    subscribe: () => null,
  };
  return <Marketplace data={data} handlers={handlers} />;
};

export default Market;
