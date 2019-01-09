import React, { FunctionComponent, useEffect, useState } from 'react';
import gql from 'graphql-tag';
import queryString from 'query-string';
import List from '../../components/layouts/List';
import Title from '../../components/texts/Title';
import Control from '../../components/inputs/Control';
import Button from '../../components/buttons/Button';
import apolloPersistor from '../../utils/apolloPersistor';
import useInstanceExecute from '../effects/useInstanceExecute';
import { runElectron } from '../../utils/electron';

export const githubUrlQuery = apolloPersistor.instance({
  name: 'query',
  map: ({ ...args }) => ({
    ...args,
    query: gql`
      query GitHubUrl {
        oauthGitHubUrl
        userConnectedGitHub
      }
    `,
  }),
});

export const githubConnectMutation = apolloPersistor.instance({
  name: 'mutate',
  map: ({ ...args }) => ({
    ...args,
    mutation: gql`
      mutation ConnectGitHub($code: String!) {
        authConnectGitHub(code: $code) {
          token
          userId
        }
      }
    `,
  }),
});

export interface IAccountsProps {}

const Accounts: FunctionComponent<IAccountsProps> = () => {
  useEffect(() => {
    const { code } = queryString.parse(window.location.search);
    if (code) {
      githubConnectMutation.execute({ variables: { code } });
    }
  }, []);
  const {
    data: { oauthGitHubUrl, userConnectedGitHub },
  } = useInstanceExecute(githubUrlQuery);
  const navigateGitHub = () => {
    runElectron(
      electron => {
        electron.ipcRenderer.send('authGitHub', oauthGitHubUrl);
      },
      () => window.location.assign(oauthGitHubUrl)
    );
  };
  const GitHub = ({ ...args }) => (
    <Button {...args} onClick={navigateGitHub}>
      {userConnectedGitHub ? 'Update connection' : 'Connect'} to GitHub
    </Button>
  );
  return (
    <List>
      <Title>Accounts</Title>
      <br />
      <List wide="true">
        <Control
          label="GitHub"
          help="Make logging in easier by connecting to GitHub."
          auto="right"
          input={GitHub}
        />
      </List>
    </List>
  );
};

export default Accounts;
