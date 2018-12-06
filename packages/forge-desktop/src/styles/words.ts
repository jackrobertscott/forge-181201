import { css } from 'styled-components';
import colors from './colors';

export default {
  /**
   * Regular text throughout the app.
   */
  normal: () => css`
    font-size: 1em;
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
    font-size: 0.9em;
  `,
  /**
   * Bad things...
   */
  danger: () => css`
    color: ${colors.dangerLighter};
  `,
  /**
   * Bold white text.
   */
  primary: () => css`
    color: ${colors.white};
  `,
  /**
   * Shaded text for secondary items.
   */
  secondary: () => css`
    color: ${colors.shade};
  `,
  /**
   * For multi-line areas.
   */
  multiline: () => css`
    line-height: 1.4em;
  `,
};
