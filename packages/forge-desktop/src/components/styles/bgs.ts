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
  dark: ({ hover }: IStyleStates = {}) => css`
    border: 1px solid ${colors.nightDark};
    background-color: ${colors.night};
    color: ${colors.white};
    transition: 0.2s;
    ${hover &&
      css`
        &:hover {
          cursor: pointer;
          background-color: ${Color(colors.night)
            .lighten(0.3)
            .string()};
        }
      `}
  `,
  /**
   * Highlighted boxes.
   */
  darkLight: ({ hover }: IStyleStates = {}) => css`
    border: 1px solid ${colors.nightDark};
    background-color: ${colors.nightLight};
    color: ${colors.white};
    transition: 0.2s;
    ${hover &&
      css`
        &:hover {
          cursor: pointer;
          background-color: ${Color(colors.nightLight)
            .lighten(0.3)
            .string()};
        }
      `}
  `,
  marine: ({ hover }: IStyleStates = {}) => css`
    border: 1px solid ${colors.marineDark};
    background-color: ${colors.marine};
    color: ${colors.marineLight};
    transition: 0.2s;
    ${hover &&
      css`
        &:hover {
          cursor: pointer;
          background-color: ${Color(colors.marine)
            .lighten(0.3)
            .string()};
        }
      `}
  `,
  /**
   * Dangerous actions.
   */
  danger: ({ hover }: IStyleStates = {}) => css`
    background-color: ${colors.dangerLight};
    border: 1px solid ${colors.dangerDark};
    color: ${colors.dangerDark};
    transition: 0.2s;
    ${hover &&
      css`
        &:hover {
          cursor: pointer;
          background-color: ${Color(colors.dangerLight)
            .lighten(0.3)
            .string()};
        }
      `}
  `,
};
