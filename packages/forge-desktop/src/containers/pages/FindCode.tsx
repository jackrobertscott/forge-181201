import React, { FunctionComponent } from 'react';
import { Link } from 'lumbridge';
import Split from '../../components/layouts/Split';
import SimpleInput from '../../components/inputs/SimpleInput';
import StatusEditor from '../../components/editors/StatusEditor';
import GoodButton from '../../components/buttons/GoodButton';
import List from '../../components/layouts/List';
import ChooseBundle from '../../components/lists/ChooseBundle';

export interface IFindCodeProps {}

const fakeBundles = [
  { id: '123', name: 'React', codeCount: 8 },
  { id: '324', name: 'Vue.js', codeCount: 8 },
  { id: '345', name: 'Angular', codeCount: 8 },
  { id: '645', name: 'Console', codeCount: 8 },
  { id: '276', name: 'React', codeCount: 8 },
  { id: '243', name: 'Vue.js', codeCount: 8 },
  { id: '563', name: 'Angular', codeCount: 8 },
  { id: '654', name: 'Console', codeCount: 8 },
  { id: '123a', name: 'React', codeCount: 8 },
  { id: '324a', name: 'Vue.js', codeCount: 8 },
  { id: '345a', name: 'Angular', codeCount: 8 },
  { id: '645a', name: 'Console', codeCount: 8 },
  { id: '276a', name: 'React', codeCount: 8 },
  { id: '243a', name: 'Vue.js', codeCount: 8 },
  { id: '563a', name: 'Angular', codeCount: 8 },
  { id: '654a', name: 'Console', codeCount: 8 },
];

const FindCode: FunctionComponent<IFindCodeProps> = () => {
  const data = {
    bundles: fakeBundles,
    codes: [],
  };
  const handlers = {
    choose: () => null,
  };
  return (
    <Split>
      <List>
        <SimpleInput placeholder="Search..." />
        <GoodButton as={Link} to="/create" auto="left">
          Create
        </GoodButton>
        <ChooseBundle data={data} handlers={handlers} />
      </List>
      <StatusEditor active={false} />
    </Split>
  );
};

export default FindCode;
