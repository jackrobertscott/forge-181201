import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import Button from '../buttons/Button';
import List from '../layouts/List';
import Onboard from '../layouts/Onboard';
import GoodButton from '../buttons/GoodButton';
import Arrow from '../buttons/Arrow';
import { Link } from 'lumbridge';

const Divider = styled('div')`
  background-color: ${colors.night};
  height: 1px;
  margin: 0 auto 10px;
  width: 100px;
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
        <Divider />
        <LinkWrap to="/sign-up">
          <SignUpButton icon={<Arrow />}>Sign up</SignUpButton>
        </LinkWrap>
      </List>
    </Onboard>
  );
};

export default ChooseAuth;
