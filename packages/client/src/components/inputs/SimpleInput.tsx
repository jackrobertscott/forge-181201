import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import bgs from '../../styles/bgs';
import shapes from '../../styles/shapes';
import shadows from '../../styles/shadows';
import states from '../../styles/states';
import layouts from '../../styles/layouts';

const Wrap = styled('input')`
  ${bgs.dark}
  ${shapes.narrow}
  ${shapes.fill}
  ${shadows.simple}
  ${layouts.noshrink}
  ${states.focused([bgs.darkLight, shadows.pop])}
`;

export interface IInputProps {
  field?: any;
  inner?: any;
  [name: string]: any;
}

const SimpleInput: FunctionComponent<IInputProps> = ({
  field = {},
  inner,
  ...args
}) => <Wrap ref={inner} {...field} {...args} />;

export default SimpleInput;
