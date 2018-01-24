import React from 'react';
import styled, {css} from 'styled-components';

import Seed from "./HomeSeed/Seed";
import {withRouter} from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 22px 27px 0 23px;  
`;

const StyledSeed = styled(Seed)` 
  position: relative;
  margin-bottom: 5px;
  width: 100%;
  flex-shrink: 0;
  transition: transform 800ms ease;
  transform-origin: 50% 50%;
  transform: rotate(${p => p.theme.seedRotation[3]}deg);
  &:hover {
    transform: rotate(${p => p.theme.seedRotation[3] - 10}deg);
  }
    
  ${p => p.rotate && css`
    margin-bottom: 12px;
    transform-origin: 50% 50%;
    transform: rotate(${p => p.theme.seedRotation[0]}deg) translateX(2px);
    &:hover {
      transform: rotate(${p => p.theme.seedRotation[0] + 10}deg);
    }
  `}

  ${p => p.isActive && css `
    path {fill: ${p => p.theme.colors.main};}
  `}
`;

const Navigation = (props) => {
  return (
    <Wrapper>
      <StyledSeed
        to='/restaurant'
        show
        rotate
        isActive={props.location.pathname === '/restaurant'}
      />
      <StyledSeed
        to='/carte'
        show
        isActive={props.location.pathname === '/carte'}
      />
      <StyledSeed
        to='/vins'
        show
        isActive={props.location.pathname === '/vins'}
      />
    </Wrapper>
  );
};

export default withRouter(Navigation);
