import React, { FunctionComponent } from 'react';
import { IComponentProps } from '../../utils/components';
import Result from '../cards/Result';

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
    <>
      {bundles}
      <br />
      {codes}
    </>
  );
};

export default SearchList;
