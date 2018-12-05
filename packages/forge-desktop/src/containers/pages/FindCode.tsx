import React, { FunctionComponent, useState, ReactNode } from 'react';
import Split from '../../components/layouts/Split';
import SimpleInput from '../../components/inputs/SimpleInput';
import StatusEditor from '../../components/editors/StatusEditor';
import GoodButton from '../../components/buttons/GoodButton';
import List from '../../components/layouts/List';
import Result from '../../components/cards/Result';

interface IFindCodeProps {}

const results = ['React', 'Vue.js', 'Angular', 'Console'];
const mapResuts = (name: string) => <Result note="10 Snippets">{name}</Result>;

const FindCode: FunctionComponent<IFindCodeProps> = () => {
  const sidebar: ReactNode = (
    <List>
      <SimpleInput placeholder="Search..." />
      <GoodButton auto="left">Create</GoodButton>
      {results.map(mapResuts)}
    </List>
  );
  return (
    <Split sidebar={sidebar}>
      <StatusEditor active={false} />
    </Split>
  );
};

export default FindCode;
