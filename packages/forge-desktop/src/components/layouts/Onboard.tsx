import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { IComponentProps } from '../../utils/components';
import bgs from '../../styles/bgs';
import layouts from '../../styles/layouts';
import Container from '../cards/Container';
import Button from '../buttons/Button';
import GoodButton from '../buttons/GoodButton';
import logo from '../../assets/logo/Standard.svg';
import arrow from '../../assets/features/Up.svg';
import List from './List';
import colors from '../../styles/colors';

const Wrap = styled('div')`
  ${layouts.center}
  ${bgs.fadeLight}
  flex-grow: 1;
`;

const Logo = styled('img')`
  height: 35px;
  margin: 0 auto 25px;
  opacity: 0.15;
`;

const Divider = styled('div')`
  background-color: ${colors.offsetDark};
  height: 1px;
  margin: 0 auto 10px;
  width: 100px;
`;

const AuthButton = styled(Button)`
  ${layouts.rowsCenter}
  justify-content: space-between;
  color: ${colors.white};
  width: 100%;
  max-width: 240px;
  margin-left: auto;
  margin-right: auto;
  &:hover {
    color: ${colors.white};
  }
`;

const Arrow = styled('img')`
  height: 1em;
  transform: rotate(90deg);
  filter: invert(100%);
  opacity: 0.9;
`;

export interface IOnboardProps extends IComponentProps {
  data: {};
  handlers: {};
}

const Onboard: FunctionComponent<IOnboardProps> = ({ data, handlers }) => {
  return (
    <Wrap>
      <Container>
        <Logo src={logo} />
        <List>
          <AuthButton as={GoodButton}>
            Login
            <Arrow src={arrow} />
          </AuthButton>
          <Divider />
          <AuthButton>
            Sign up
            <Arrow src={arrow} />
          </AuthButton>
        </List>
      </Container>
    </Wrap>
  );
};

export default Onboard;
