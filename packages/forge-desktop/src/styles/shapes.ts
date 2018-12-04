import { css } from 'styled-components';

export default {
  /**
   * Used for most regular info components.
   */
  padded: () => css`
    padding: 15px;
  `,
  /**
   * Used for most regular info components.
   */
  simple: () => css`
    padding: 15px;
    border-radius: 5px;
  `,
  /**
   * Used for most regular info components.
   */
  narrow: () => css`
    padding: 12px 15px;
    border-radius: 5px;
  `,
  /**
   * Used for most regular info components.
   */
  mini: () => css`
    padding: 5px 10px;
    border-radius: 3px;
  `,
  /**
   * Fill space.
   */
  fill: () => css`
    width: 100%;
  `,
};
