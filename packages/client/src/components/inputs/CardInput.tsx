import styled from 'styled-components';
import bgs from '../../styles/bgs';
import shapes from '../../styles/shapes';
import shadows from '../../styles/shadows';
import states from '../../styles/states';
import layouts from '../../styles/layouts';
import { CardElement } from 'react-stripe-elements';
import colors from '../../styles/colors';

export default styled(CardElement).attrs({
  style: {
    base: { color: colors.white },
  },
})`
  ${bgs.dark}
  ${shapes.narrow}
  ${shapes.fill}
  ${shadows.simple}
  ${layouts.noshrink}
  ${states.focused([bgs.darkLight, shadows.pop])}
`;
