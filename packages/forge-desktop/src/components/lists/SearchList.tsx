import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { IComponentProps } from '../../utils/components';
import Result from '../cards/Result';
import List from '../layouts/List';

const Wrap = styled('div')`
  flex-grow: 1;
  overflow: auto;
`;

interface IBundleFragment {
  id: string;
  name: string;
  codeCount: number;
}

interface ICodeFragment {
  id: string;
  name: string;
  shortcut: string;
}

interface ISearchListProps extends IComponentProps {
  data: {
    bundles: IBundleFragment[];
    codes: ICodeFragment[];
  };
}

const SearchList: FunctionComponent<ISearchListProps> = ({ data }) => {
  const bundles = data.bundles.map(
    ({ id, name, codeCount }: IBundleFragment) => (
      <Result key={id} note={`${codeCount} Snippets`}>
        {name}
      </Result>
    )
  );
  const codes = data.codes.map(({ id, name, shortcut }: ICodeFragment) => (
    <Result key={id} note={shortcut}>
      {name}
    </Result>
  ));
  return (
    <Wrap>
      <List>
        {bundles}
        <br />
        {codes}
      </List>
    </Wrap>
  );
};

export default SearchList;
