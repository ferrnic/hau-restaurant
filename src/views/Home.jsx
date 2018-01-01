import React from 'react';
import styled, { css } from 'styled-components';

import { Wrapper as HomeSeedWrapper } from '../components/HomeSeed';
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
  max-width: 500px;
  position: relative;
  left: -15px;
  
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
  }  
`;

const SeedWrapper = styled.div`
  width: 33%;
  margin: 2%;
  
  // rotate and shift the seeds
  ${p => p.seedTranslate && css`${HomeSeedWrapper} { transform: translateX(30px) translateY(-5px); `}
  ${p => p.seedRotate && css`${StyledSeed} { transform: rotate(${p.theme.seedRotation[1]}deg); `}
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
      <SeedWrapper
        seedRotate
        seedTranslate
      >
        <Seed
          to='/restaurant'
          U
        />
      </SeedWrapper>
    </Wrapper>
  </BackGround>
);

export default Home;
