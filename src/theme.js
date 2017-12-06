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
  breakpoints: {
    width: {
      small: 400,
      medium: 768,
      large: 992,
    },
  },
  seedRotation: {
    0: 0,
    1: 73,
    2: 180,
    3: 253,
  },
  transitions: transitions,
};

// Iterate through the theme.breakpoints and create a media template
export const media = Object.keys(theme.breakpoints.width).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${theme.breakpoints.width[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc
}, {});
