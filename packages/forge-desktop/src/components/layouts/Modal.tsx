import React, { ReactNode, FunctionComponent } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import styled from 'styled-components';
import layouts from '../../styles/layouts';
import shapes from '../../styles/shapes';
import Toggle, { IToggle } from '../statefuls/Toggle';
import animate from '../../styles/animate';

const Wrap = styled('div')`
  ${layouts.center}
  ${shapes.padded}
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.25);
  animation: ${animate.fadeIn} 0.2s linear;
`;

interface IModalProps {
  component: ReactNode;
  children: (bag: IToggle) => ReactNode;
}

const Modal: FunctionComponent<IModalProps> = ({ component, children }) => {
  const toggleable = ({ toggle, active, close, ...others }: IToggle) => {
    const popup = (
      <Wrap>
        <OutsideClickHandler onOutsideClick={close}>
          {component}
        </OutsideClickHandler>
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

export default Modal;
