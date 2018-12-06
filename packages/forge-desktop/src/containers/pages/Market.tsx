import React, { FunctionComponent } from 'react';
import Marketplace from '../../components/layouts/Marketplace';

const fakeBundles = [
  {
    id: '123',
    name: 'React',
    readme:
      'This is a simple description about the bundle that will help users understand what it is.',
  },
  {
    id: '324',
    name: 'Vue.js',
    readme:
      'This is a simple description about the bundle that will help users understand what it is.',
  },
  {
    id: '345',
    name: 'Angular',
    readme:
      'This is a simple description about the bundle that will help users understand what it is.',
  },
  {
    id: '645',
    name: 'Console',
    readme:
      'This is a simple description about the bundle that will help users understand what it is.',
  },
  {
    id: '276',
    name: 'React',
    readme:
      'This is a simple description about the bundle that will help users understand what it is.',
  },
  {
    id: '243',
    name: 'Vue.js',
    readme:
      'This is a simple description about the bundle that will help users understand what it is.',
  },
  {
    id: '563',
    name: 'Angular',
    readme:
      'This is a simple description about the bundle that will help users understand what it is.',
  },
  {
    id: '654',
    name: 'Console',
    readme:
      'This is a simple description about the bundle that will help users understand what it is.',
  },
];

interface IMarketProps {}

const Market: FunctionComponent<IMarketProps> = () => {
  const data = {
    bundles: fakeBundles,
  };
  return <Marketplace data={data} />;
};

export default Market;
