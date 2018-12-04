import Color from 'color';
import colors from './colors';
import { css } from 'styled-components';

export interface IStyleStates {
  hover?: boolean;
}

export default {
  /**
   * Regular components used on most pages.
   */
  dark: () => css`
    color: ${colors.white};
    border: 1px solid ${colors.nightDark};
    background-color: ${colors.night};
  `,
  darkLight: () => css`
    color: ${colors.white};
    border: 1px solid ${colors.nightDark};
    background-color: ${colors.nightLight};
  `,
  /**
   * Primary actions.
   */
  marine: () => css`
    color: ${colors.marineLight};
    border: 1px solid ${colors.marineDark};
    background-color: ${colors.marine};
  `,
  marineLight: () => css`
    color: ${colors.marineLight};
    border: 1px solid ${colors.marineDark};
    background-color: ${Color(colors.marine)
      .lighten(0.3)
      .string()};
  `,
  /**
   * Dangerous actions.
   */
  danger: () => css`
    color: ${colors.danger};
    border: 1px solid ${colors.dangerDark};
    background-color: ${colors.dangerLight};
  `,
  dangerLight: () => css`
    color: ${colors.danger};
    border: 1px solid ${colors.dangerDark};
    background-color: ${Color(colors.dangerLight)
      .lighten(0.3)
      .string()};
  `,
};
