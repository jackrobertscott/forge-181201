import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { IComponentProps } from '../../utils/components';
import Subtitle from '../texts/Subtitle';
import bgs from '../../styles/bgs';
import shapes from '../../styles/shapes';
import shadows from '../../styles/shadows';
import layouts from '../../styles/layouts';
import words from '../../styles/words';
import states from '../../styles/states';

const Wrap = styled('div')`
  ${layouts.rows}
  ${shapes.padded}
  flex-grow: 1;
  flex-wrap: wrap;
  padding-right: 0;
  align-content: flex-start;
`;

const Item = styled('div')`
  ${bgs.dark}
  ${shapes.simple}
  ${shadows.simple}
  ${layouts.space}
  ${states.hovered(bgs.darkLight)}
  ${states.clicked([bgs.dark, shadows.none])}
  width: 25.1%;
  margin-right: 15px;
  margin-bottom: 15px;
  flex-grow: 1;
`;

const Name = styled('div')`
  ${words.normal}
  margin-bottom: 4px;
`;

const Readme = styled('div')`
  ${words.secondary}
  ${words.small}
`;

export interface IBundleFragment {
  id: string;
  name: string;
  readme: string;
}

export interface IMarketplaceProps extends IComponentProps {
  data: {
    bundles: IBundleFragment[];
  };
}

const Marketplace: FunctionComponent<IMarketplaceProps> = ({ data }) => {
  const bundles = data.bundles.map(({ id, name, readme }: IBundleFragment) => (
    <Item key={id}>
      <Name>{name}</Name>
      <Readme>{readme}</Readme>
    </Item>
  ));
  return <Wrap>{bundles}</Wrap>;
};

export default Marketplace;
