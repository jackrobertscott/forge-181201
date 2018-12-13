import { keyframes } from 'styled-components';

export default {
  /**
   * Fade in to view.
   */
  fadeIn: keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `,
  /**
   * Fade out of view.
   */
  fadeOut: keyframes`
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  `,
  /**
   * Slide in from left.
   */
  slideRight: keyframes`
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  `,
  /**
   * Slide in from left.
   */
  slideLeft: keyframes`
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  `,
};
