import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';
import OutsideClickHandler from 'react-outside-click-handler';
import layouts from '../../styles/layouts';
import bgs from '../../styles/bgs';
import shadows from '../../styles/shadows';
import shapes from '../../styles/shapes';
import Toggle, { IToggle } from '../statefuls/Toggle';
import states from '../../styles/states';
import words from '../../styles/words';

const Container = styled('div')`
  position: relative;
`;

const Wrap = styled('div')`
  ${bgs.darkLighter}
  ${shadows.simple}
  ${shapes.simple}
  padding-left: 0;
  padding-right: 0;
  position: absolute;
  right: 5px;
  top: 5px;
  z-index: 10;
`;

interface IPopupMenuProps {
  children: ReactNode;
  items: ReactNode;
}

const PopupMenu: FunctionComponent<IPopupMenuProps> & {
  Item: FunctionComponent;
  List: FunctionComponent;
} = ({ children, items }) => {
  const toggleable = ({ active, open, close }: IToggle) => {
    const popup = (
      <OutsideClickHandler onOutsideClick={close}>
        <Wrap>{items}</Wrap>
      </OutsideClickHandler>
    );
    return (
      <Container onClick={open}>
        {children}
        {active && popup}
      </Container>
    );
  };
  return <Toggle>{toggleable}</Toggle>;
};

PopupMenu.Item = styled('div').attrs({ borderless: 'true' })`
  ${bgs.darkLight}
  ${states.hovered(bgs.dark)}
  ${shapes.thin}
  ${layouts.rowsCenter}
  ${words.small}
  width: 200px;
`;

PopupMenu.List = styled('div')`
  ${layouts.columns}
`;

export default PopupMenu;
