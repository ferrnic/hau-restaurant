import React from 'react';
import styled, { css } from 'styled-components';

import Seed, {StyledSeed} from "./HomeSeed/Seed";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 27px 0 23px;

  ${StyledSeed} { 
    display: block;
    margin-bottom: 5px;
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    
    .seedPath {
      transition: transform 800ms ease;
      transform-origin: 50% 50%;
      transform: rotate(${p => p.theme.seedRotation[3]}deg);
    }

    .seedPath:hover {
      transform: rotate(${p => p.theme.seedRotation[3] - 10}deg);
    }   
  }  
  
  ${StyledSeed}.firstSeed {
    margin-bottom: 10px;
    .seedPath {
      transform: rotate(0deg) translateX(3px) translateY(-5px);
    }
    .seedPath:hover {
      transform: rotate(10deg) translateX(3px) translateY(-5px);
    }    
  }
  
  path {
    fill: ${p => p.theme.colors.dark};
  }
  .active > path {
      fill: ${p => p.theme.colors.main};
  }
`;

const Navigation = () => (
  <Wrapper>
    <Seed
      className="firstSeed"
      to='/carte'
    />
    <Seed
      to='/vins'
    />
    <Seed
      to='/restaurant'
    />
  </Wrapper>
);

export default Navigation;
