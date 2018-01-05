import React from 'react';
import styled, { css } from 'styled-components';

import { StyledSeed } from '../components/HomeSeed/Seed';
import HomeSeed from "../components/HomeSeed";
import {StyledLetter} from "../components/HomeSeed/Letter";

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
  ${StyledSeed}, ${StyledLetter} { 
    transition: opacity 300ms ease;
  }  
`;

const SeedWrapper = styled(HomeSeed)`
  width: 33%;
  margin: 2%;
  position: relative;
  
  ${p => p.rotate && css`
    ${StyledSeed} {
      transform-origin: 50% 50%;
      transform: rotate(${p => p.theme.seedRotation[1]}deg) translateY(-12%) translateX(0);
    }
  `}
`;

const Home = () => (
  <BackGround>
    <Wrapper>
      <SeedWrapper
        to='/carte'
        letter={'H'}
      />
      <SeedWrapper
        to='/vins'
        letter={'A'}
      />
      <SeedWrapper
        to='/restaurant'
        letter={'U'}
        rotate
      />
    </Wrapper>
  </BackGround>
);

export default Home;
