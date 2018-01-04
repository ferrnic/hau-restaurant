import { css } from 'styled-components';

export const svgCss = css`
  position: absolute;
  margin: auto;
  top: 0; left: 0; bottom: 0; right: 0;
  overflow: auto;
  
  fill: ${p => p.theme.colors.dark};
  opacity: ${p => p.show ? 1 : 0};
 `;