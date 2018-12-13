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
  flex-shrink: 0;
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
  z-index: 20;
`;

export interface IPopupMenuProps {
  children: ReactNode;
  items: ReactNode;
}

const PopupMenu: FunctionComponent<IPopupMenuProps> & {
  Item: any;
  List: any;
} = ({ children, items }) => {
  const toggleable = ({ active, open, close, ...args }: IToggle) => {
    const popup = (
      <OutsideClickHandler onOutsideClick={close}>
        <Wrap>
          <div onClick={close}>{items}</div>
        </Wrap>
      </OutsideClickHandler>
    );
    const openClose = () => !active && open();
    return (
      <Container onClick={openClose}>
        {children}
        {active && popup}
      </Container>
    );
  };
  return <Toggle>{toggleable}</Toggle>;
};

PopupMenu.Item = styled('div').attrs({ borderless: 'true' })`
  ${({
    ...args
  }: {
    as?: boolean | string;
    to?: boolean | string;
    [name: string]: any;
  }) => null}
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
