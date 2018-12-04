import { css, FlattenInterpolation } from 'styled-components';

export default {
  /**
   * Hover with a transition.
   */
  clickable: (hoverCss: any) => () => css`
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
};
