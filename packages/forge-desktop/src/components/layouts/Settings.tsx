import React, { ReactNode, FunctionComponent } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import styled from 'styled-components';
import layouts from '../../styles/layouts';
import Toggle, { IToggle } from '../statefuls/Toggle';
import animate from '../../styles/animate';
import colors from '../../styles/colors';
import shapes from '../../styles/shapes';

const Wrap = styled('div')`
  ${layouts.rows}
  ${layouts.spider}
  top: 40px;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.25);
`;

const Sidebar = styled('div')`
  ${shapes.padded}
  width: 35%;
  min-width: 35%;
  background-color: ${colors.nightLight};
  animation: ${animate.slideRight} 0.2s linear;
`;

const Main = styled('div')`
  ${shapes.padded}
  flex-grow: 1;
  background-color: ${colors.night};
  border-left: 1px solid ${colors.nightDark};
  animation: ${animate.slideLeft} 0.2s linear;
`;

interface ISettingsProps {
  sidebar: ReactNode;
  component: ReactNode;
  children: (bag: IToggle) => ReactNode;
}

const Settings: FunctionComponent<ISettingsProps> = ({
  sidebar,
  component,
  children,
}) => {
  const toggleable = ({ toggle, active, close, ...others }: IToggle) => {
    const popup = (
      <Wrap>
        <Sidebar>{sidebar}</Sidebar>
        <Main>{component}</Main>
      </Wrap>
    );
    return (
      <>
        {children({ toggle, active, close, ...others })}
        {active && popup}
      </>
    );
  };
  return <Toggle>{toggleable}</Toggle>;
};

export default Settings;
