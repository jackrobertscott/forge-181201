import React, { FunctionComponent } from 'react';
import { Link } from 'lumbridge';
import Split from '../../components/layouts/Split';
import SimpleInput from '../../components/inputs/SimpleInput';
import StatusEditor from '../../components/editors/StatusEditor';
import GoodButton from '../../components/buttons/GoodButton';
import List from '../../components/layouts/List';
import Result from '../../components/cards/Result';

interface IFindCodeProps {}

const results = [
  'React',
  'Vue.js',
  'Angular',
  'Console',
  'React',
  'Vue.js',
  'Angular',
  'Console',
];
const mapResuts = (name: string, index: number) => (
  <Result key={`${name}${index}`} note="10 Snippets">
    {name}
  </Result>
);

const FindCode: FunctionComponent<IFindCodeProps> = () => {
  return (
    <Split>
      <List>
        <SimpleInput placeholder="Search..." />
        <GoodButton as={Link} to="/create" auto="left">
          Create
        </GoodButton>
        {results.map(mapResuts)}
      </List>
      <StatusEditor active={false} />
    </Split>
  );
};

export default FindCode;
