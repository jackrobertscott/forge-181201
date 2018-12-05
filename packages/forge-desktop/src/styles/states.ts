import { css, FlattenInterpolation } from 'styled-components';

export default {
  /**
   * Hover with a transition.
   */
  hovered: (hoverCss: any) => () => css`
    transition: 0.2s;
    cursor: pointer;
    &:hover {
      ${hoverCss}
    }
  `,
  /**
   * Mouse held down with transition.
   */
  clicked: (hoverCss: any) => () => css`
    transition: 0.2s;
    &:active {
      ${hoverCss}
    }
  `,
  /**
   * Focus with a transition.
   */
  focused: (hoverCss: any) => () => css`
    transition: 0.2s;
    &:focus {
      ${hoverCss}
    }
  `,
};
