import { css } from 'styled-components';

export default {
  /**
   * Top to bottom.
   */
  columns: () => css`
    display: flex;
    flex-direction: column;
  `,
  /**
   * Left to right.
   */
  rows: () => css`
    display: flex;
    flex-direction: row;
  `,
  /**
   * Left to right centered.
   */
  rowsCenter: () => css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
};
