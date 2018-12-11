import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';
import { IComponentProps } from '../../utils/components';
import bgs from '../../styles/bgs';
import layouts from '../../styles/layouts';
import Container from '../cards/Container';
import logo from '../../assets/logo/Dark.svg';
import animate from '../../styles/animate';
import { Link } from 'lumbridge';
import colors from '../../styles/colors';

const Wrap = styled('div')`
  ${layouts.center}
  ${bgs.fade}
  flex-grow: 1;
`;

const Logo = styled('img')`
  height: 35px;
  margin: 0 auto 25px;
  opacity: 0.6;
`;

const Fade = styled('div')`
  animation: ${animate.fadeIn} 0.5s linear;
`;

const Back = styled(Link)`
  color: ${colors.nightLighter};
  text-align: center;
  margin: 20px 0 0;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: ${colors.shade};
  }
`;

export interface IOnboardProps extends IComponentProps {
  children: ReactNode;
  back?: boolean;
}

const Onboard: FunctionComponent<IOnboardProps> = ({ children, back }) => {
  return (
    <Wrap>
      <Container>
        <Logo src={logo} />
        <Fade>{children}</Fade>
        {back && <Back to="/auth">Go back.</Back>}
      </Container>
    </Wrap>
  );
};

export default Onboard;
