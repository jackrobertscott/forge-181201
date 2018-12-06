import Color from 'color';

export default {
  /**
   * Used for card backgrounds and for composing the dark theme.
   */

  night: '#1F1F1F',
  nightDark: '#101010',
  nightDarker: Color('#101010')
    .darken(0.3)
    .string(),
  nightLight: '#2F2F2F',
  nightLighter: Color('#2F2F2F')
    .lighten(0.3)
    .string(),
  /**
   * Used as a faint compliment to the dark theme e.g. secondary fonts.
   */
  shade: '#797979',
  /**
   * Used to determine primary actions such as buttons.
   */
  marine: '#1836B4',
  marineDark: '#060D2B',
  marineLight: '#5D95FF',
  /**
   * Things which delete or end other things.
   */
  danger: '#5D0707',
  dangerDark: '#2B0606',
  dangerLight: '#912C2C',
  dangerLighter: '#DE281B',
  /**
   * Stock colors.
   */
  white: '#FFFFFF',
  black: '#000000',
};
