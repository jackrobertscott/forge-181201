import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';
import { IComponentProps } from '../../utils/components';
import bgs from '../../styles/bgs';
import layouts from '../../styles/layouts';
import Container from '../cards/Container';
import animate from '../../styles/animate';
import { Link } from 'lumbridge';
import colors from '../../styles/colors';
import { loadAsset } from '../../utils/assets';

const Wrap = styled('div')`
  ${layouts.center}
  ${bgs.fade}
  flex-grow: 1;
`;

const Drag = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 40px;
  -webkit-app-region: drag;
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
      <Drag />
      <Container>
        <Logo src={loadAsset('logo/Dark.svg')} />
        <Fade>{children}</Fade>
        {back && <Back to="/auth">Go back.</Back>}
      </Container>
    </Wrap>
  );
};

export default Onboard;
