import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { IComponentProps } from '../../utils/components';
import Result from '../cards/Result';
import List from '../layouts/List';

const Wrap = styled('div')`
  flex-grow: 1;
  overflow: auto;
`;

export interface IBundleFragment {
  id: string;
  name: string;
  codeCount: number;
}

export interface IChooseBundleProps extends IComponentProps {
  data: {
    bundles: IBundleFragment[];
  };
  handlers: {
    choose: (bundle: IBundleFragment) => any;
    [name: string]: any;
  };
}

const ChooseBundle: FunctionComponent<IChooseBundleProps> = ({
  data,
  handlers,
}) => {
  const bundles = data.bundles.map((bundle: IBundleFragment) => {
    const { id, name, codeCount } = bundle;
    const choose = () => handlers.choose(bundle);
    return (
      <Result
        key={id}
        note={codeCount && `${codeCount} Snippets`}
        onClick={choose}
      >
        {name}
      </Result>
    );
  });
  return (
    <Wrap>
      <List>{bundles}</List>
    </Wrap>
  );
};

export default ChooseBundle;
