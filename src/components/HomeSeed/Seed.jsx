import React from 'react';
import styled from 'styled-components';
import {svgCss} from "./svgCss";

export const StyledSeed = styled.svg`
  ${svgCss}
 `;

const Seed = ({ show, fill }) => (
  <StyledSeed
    viewBox="0 0 120 120"
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    show={ show }
    fill={ fill }
  >
    <path d="M10 100.7s129.7-20.5 93.7-69.4C67.7-17.9 10 100.7 10 100.7z" />
  </StyledSeed>
);

export default Seed;