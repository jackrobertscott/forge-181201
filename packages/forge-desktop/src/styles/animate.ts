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
};
