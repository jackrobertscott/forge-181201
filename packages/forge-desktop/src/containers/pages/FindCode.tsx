import React, { FunctionComponent } from 'react';
import { Link } from 'lumbridge';
import Split from '../../components/layouts/Split';
import SimpleInput from '../../components/inputs/SimpleInput';
import StatusEditor from '../../components/editors/StatusEditor';
import GoodButton from '../../components/buttons/GoodButton';
import List from '../../components/layouts/List';
import ChooseCode from '../../components/lists/ChooseCode';
import useInstanceExecute from '../effects/useInstanceExecute';
import apolloPersistor from '../../persistors/apolloPersistor';
import gql from 'graphql-tag';

export const codeListQuery = apolloPersistor.instance({
  name: 'query',
  map: ({ ...args }) => ({
    ...args,
    query: gql`
      query ListCodes {
        userCodes {
          id
          name
          shortcut
        }
      }
    `,
  }),
});

export interface IFindCodeProps {}

const FindCode: FunctionComponent<IFindCodeProps> = () => {
  const {
    data: { userCodes },
    error,
    loading,
  } = useInstanceExecute(codeListQuery);
  console.log(userCodes);
  const data = {
    codes: userCodes || [],
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
        <ChooseCode data={data} handlers={handlers} />
      </List>
      <StatusEditor active={false} />
    </Split>
  );
};

export default FindCode;
