import { css } from 'styled-components';
import colors from './colors';

export default {
  /**
   * Shaded text for secondary items.
   */
  secondary: () => css`
    color: ${colors.shade};
  `,
  /**
   * Regular text throughout the app.
   */
  normal: () => css`
    font-size: 16px;
  `,
  /**
   * Big titles.
   */
  title: () => css`
    font-size: 1.4em;
  `,
  /**
   * Smaller text areas.
   */
  small: () => css`
    font-size: 0.8em;
  `,
  /**
   * Bad things...
   */
  danger: () => css`
    color: ${colors.dangerLighter};
  `,
};
