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
  /**
   * List items.
   */
  space: ({ space }: { space?: string | string[]; [props: string]: any }) =>
    space &&
    css`
    ${space.indexOf('top') !== -1 && 'margin-top: 10px;'}
    ${space.indexOf('bottom') !== -1 && 'margin-bottom: 10px;'}
    ${space.indexOf('left') !== -1 && 'margin-left: 10px;'}
    ${space.indexOf('right') !== -1 && 'margin-right: 10px;'}
  `,
};
