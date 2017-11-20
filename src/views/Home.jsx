import React from 'react';
import {Link} from "react-router-dom";
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
`;
  
const StyledLinks = styled(Link)`
  width: 33%;
  margin: 
`;

const SeedWrapper = styled.div`
  width: 100%;

  // rotate and shift the seeds
  ${p => p.rotate && css`${StyledSeed} { transform: rotate(${p.theme.seedRotation[1]}deg); `}
  ${p => p.translate && css`${HomeSeedWrapper} { transform: translateX(30px) translateY(-5px); `}
`;

const Home = () => (
  <BackGround>
    <Wrapper>
      <StyledLinks to='/carte'>
        <SeedWrapper>
          <HomeSeed
            SpecificSeed={<Seed />}
            Letter={<LetterH />}
          />
        </SeedWrapper>
      </StyledLinks>
      <StyledLinks to='/vins'>
        <SeedWrapper>
          <HomeSeed
            SpecificSeed={<Seed/>}
            Letter={<LetterA />}
          />
        </SeedWrapper>
      </StyledLinks>
      <StyledLinks to='/restaurant'>
        <SeedWrapper
          rotate
          translate
        >
          <HomeSeed
            SpecificSeed={<Seed />}
            Letter={<LetterU />}
          />
        </SeedWrapper>          
      </StyledLinks>
    </Wrapper>
  </BackGround>
);

export default Home;
