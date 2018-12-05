import React, { FunctionComponent, useState } from 'react';
import Split from '../../components/layouts/Split';
import List from '../../components/layouts/List';
import Button from '../../components/buttons/Button';
import GoodButton from '../../components/buttons/GoodButton';
import Title from '../../components/texts/Title';
import Control from '../../components/forms/Control';
import RegularEditor from '../../components/editors/RegularEditor';

interface ICreateCodeProps {}

const CreateCode: FunctionComponent<ICreateCodeProps> = () => {
  const sidebar = (
    <List>
      <Button auto="right">Back</Button>
      <br />
      <Title>Create Snippt</Title>
      <br />
      <Control
        label="Name"
        help="The name of your snippet."
        placeholder="E.g. React Component"
      />
      <Control
        label="Shortcut"
        help="Used to quickly find snippet."
        placeholder="E.g. abc"
      />
      <Control
        label="Bundle"
        help="The group of snippets."
        placeholder="E.g. React"
      />
      <GoodButton>Create</GoodButton>
    </List>
  );
  return (
    <Split reverse={true} sidebar={sidebar}>
      <RegularEditor />
    </Split>
  );
};

export default CreateCode;
