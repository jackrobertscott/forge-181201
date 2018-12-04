import { css } from 'styled-components';

export default {
  /**
   * Regular text throughout the app.
   */
  normal: () => css`
    font-size: 14px;
  `,
  /**
   * Big titles.
   */
  title: () => css`
    font-size: 20px;
  `,
  /**
   * Smaller text areas.
   */
  small: () => css`
    font-size: 12px;
  `,
};
