import { css } from 'styled-components';

const transitions = css`
    transition-timing-function: ease-in-out;
    transition-duration: 300ms;
`;

export const theme = {
  colors: {
    main: '#E81835',
    dark: '#343029',
    light: '#E6E6E6',
  },
  seedRotation: {
    0: 0,
    1: 73,
    2: 180,
    3: 253,
  },
  transitions: transitions,
  breakpoints: {
    verySmall: {
      viewMinWidth: 370, // iphone 6 === 375px
    },
    small: {
      viewMinWidth: 475,
    },
    medium: {
      viewMinWidth: 800,
      contentSize: 490,
    },
  },
};
