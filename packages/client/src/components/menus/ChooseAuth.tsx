import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import Button from '../buttons/Button';
import List from '../layouts/List';
import Onboard from '../layouts/Onboard';
import GoodButton from '../buttons/GoodButton';
import Arrow from '../buttons/Arrow';
import { Link } from 'lumbridge';
import layouts from '../../styles/layouts';

const Divider = styled('div')`
  ${layouts.rowsCenter}
  color: ${colors.nightDarker};
  margin: 0 10px 10px;
`;

const Line = styled('div')`
  background-color: ${colors.night};
  height: 1px;
  flex-grow: 1;
`;

const Or = styled('div')`
  margin: 0 10px;
`;

const LinkWrap = styled(Link)`
  text-decoration: none;
`;

const LoginButton = styled(GoodButton)`
  width: 100%;
`;

const SignUpButton = styled(Button)`
  width: 100%;
`;

export interface IChooseAuthProps {}

const ChooseAuth: FunctionComponent<IChooseAuthProps> = () => {
  return (
    <Onboard>
      <List>
        <LinkWrap to="/login">
          <LoginButton bright="true" icon={<Arrow />}>
            Login
          </LoginButton>
        </LinkWrap>
        <Divider>
          <Line />
          <Or>or</Or>
          <Line />
        </Divider>
        <LinkWrap to="/sign-up">
          <SignUpButton icon={<Arrow />}>Sign up</SignUpButton>
        </LinkWrap>
      </List>
    </Onboard>
  );
};

export default ChooseAuth;
