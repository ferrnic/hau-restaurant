import React from 'react';
import styled, { css } from 'styled-components';

import Seed, { StyledSeed } from '../components/HomeSeed/Seed';

const BackGround = styled.div`
  position: relative;  
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.colors.main};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 90vw;
  max-width: 800px;
  position: relative;
  // re-center because lastSeed is 6% on the right
  left: -3%;
  ${StyledSeed} { 
    .seedPath, .letter {
      transition: opacity 800ms ease;
    }
    .seedPath:hover {
      opacity: 0;
    }
    .letter {
      opacity: 0;
    }
    .letter.isHovered {
      opacity: 1;
    }
    
    .seedPath#lastSeed {
      transform-origin: 50% 50%;
      transform: rotate(${p => p.theme.seedRotation[1]}deg) translateY(0);
    }
  }  
`;

const SeedWrapper = styled.div`
  width: 33%;
  margin: 2%;
  position: relative;
  
  ${p => p.lastSeed && css`
    left: 6%;
    svg {
      position: relative;
      bottom: 5%;
    }
  `}
`;

const Home = () => (
  <BackGround>
    <Wrapper>
      <SeedWrapper>
        <Seed
          to='/carte'
          H
        />
      </SeedWrapper>
      <SeedWrapper>
        <Seed
          to='/vins'
          A
        />
      </SeedWrapper>
      <SeedWrapper lastSeed>
        <Seed
          to='/restaurant'
          U
          pathId="lastSeed"
        />
      </SeedWrapper>
    </Wrapper>
  </BackGround>
);

export default Home;
