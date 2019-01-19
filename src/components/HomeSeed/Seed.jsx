import React from 'react';
import styled from 'styled-components';
import {svgCss} from "./svgCss";
import {withRouter} from "react-router-dom";

export const StyledSeed = styled.svg`
  ${svgCss}
  path:hover {
    cursor: pointer;
  }
 `;

const Seed = (props) => {
  const {
    to,
    show,
    onMouseEnter,
    onMouseLeave,
    className,
    history,
    rotate,
    ...rest
  } = props;

  const handleClickPath = () => {
    history.push(to);
  };

  return (
    <StyledSeed
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      show={show}
      className={className}
      {...rest}
    >
      <path
        d="M10 100.7s129.7-20.5 93.7-69.4C67.7-17.9 10 100.7 10 100.7z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={() => handleClickPath()}
      />
    </StyledSeed>
  );
};

export default withRouter(Seed);
