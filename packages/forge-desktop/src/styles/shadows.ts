import { css } from 'styled-components';

export default {
  /**
   * Light shadow used on most dashboard components.
   */
  none: () => css`
    box-shadow: none;
  `,
  /**
   * Light shadow used on most dashboard components.
   */
  simple: () => css`
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
  `,
  /**
   * Light shadow used on most dashboard components.
   */
  pop: () => css`
    box-shadow: 0 1px 15px 1px rgba(0, 0, 0, 0.35);
  `,
};
