import React from 'react';
import styled, { css } from 'styled-components';

import HomeSeed, { Wrapper as HomeSeedWrapper } from '../components/HomeSeed';
import LetterH from '../components/HomeSeed/LetterH';
import LetterA from '../components/HomeSeed/LetterA';
import LetterU from '../components/HomeSeed/LetterU';
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
    display: block;
   
    transform: rotate(${p => p.theme.seedRotation[3]}deg);
    transition: all 800ms ease;

    :hover {
      transform: rotate(${p => p.theme.seedRotation[3] - 10}deg);
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
        <HomeSeed
          Seed={<Seed to='/carte'/>}
          Letter={<LetterH />}
        />
      </SeedWrapper>
      <SeedWrapper>
        <HomeSeed
          Seed={<Seed to='/vins'/>}
          Letter={<LetterA />}
        />
      </SeedWrapper>
      <SeedWrapper
        seedRotate
        seedTranslate
      >
        <HomeSeed
          Seed={<Seed to='/restaurant'/>}
          Letter={<LetterU />}
        />
      </SeedWrapper>
    </Wrapper>
  </BackGround>
);

export default Home;
