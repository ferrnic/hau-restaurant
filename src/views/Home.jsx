import React from 'react';
import styled, { css } from 'styled-components';
import { Video, Transformation } from 'cloudinary-react';

import { StyledSeed } from '../components/HomeSeed/Seed';
import HomeSeed from "../components/HomeSeed";
import {StyledLetter} from "../components/HomeSeed/Letter";

const BackGround = styled.div`
  position: relative;  
  width: 100vw;
  height: 100vh;
  background: ${props => `url(https://res.cloudinary.com/hau/video/upload/c_scale,so_0,h_1000,q_80/${props.month}.jpg)`} no-repeat center center fixed;
  background-size: cover;
  background-color: ${props => props.theme.colors.dark};
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
  
  svg {
    fill: ${p => p.theme.colors.main};
  }
  
  ${p => p.rotate && css`
    ${StyledSeed} {
      transform-origin: 50% 50%;
      transform: rotate(${p => p.theme.seedRotation[1]}deg) translateY(-17%) translateX(1%);
    }
  `}
`;


const StyledVideo = styled(Video)`
  position: absolute;
  width: 100%;
  height: 100%;
  
  top: 0;
  left: 0;

  /* 1. Pas de support d'object-fit */
  @media (min-aspect-ratio: 16/9) {
    height: 300%;
    top: -100%;
  }
  @media (max-aspect-ratio: 16/9) {
    width: 300%;
    left: -100%;
  }
  /* 2. En cas de support d'object-fit, écrase les règles en (1) */
  @supports (object-fit: cover) {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
  }
`;

// avalaible month are:
// february
// march
// may
// october
const availableMonths = {
  // override month because it's not snowing ^^
  // 0: 'february',
  // 1: 'february',
  0: 'march',
  1: 'march',
  2: 'march',
  3: 'may',
  4: 'may',
  5: 'may',
  6: 'may',
  7: 'may',
  8: 'october',
  9: 'october',
  10: 'october',
  11: 'march'
};

const Home = () => {
  const monthNumber = availableMonths[new Date().getMonth()];
  return (
    <BackGround month={monthNumber}>
      <StyledVideo
        cloudName="hau"
        publicId={monthNumber}
        autoPlay
        loop
        poster={null}
        onClick={e => e.preventDefault()}
        muted
        playsInline
      >
        <Transformation audio_codec="none" video_codec="auto"/>
      </StyledVideo>
      <Wrapper>
        <SeedWrapper
          to='/restaurant'
          letter={'H'}
        />
        <SeedWrapper
          to='/carte'
          letter={'A'}
        />
        <SeedWrapper
          to='/vins'
          letter={'U'}
          rotate
        />
      </Wrapper>
    </BackGround>
  );
};

export default Home;
