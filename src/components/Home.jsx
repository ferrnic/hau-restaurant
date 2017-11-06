import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';

import HomeSeed from './HomeSeed';
import LetterH from './HomeSeed/LetterH';
import LetterA from './HomeSeed/LetterA';
import LetterU from './HomeSeed/LetterU';
import Seed from './HomeSeed/Seed';

const BackGround = styled.div`
  position: relative;  
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.colors.main};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLinks = styled(Link)`
  width: 33%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 90vw;
  max-width: 500px;
  position: relative;
  `;
  
  const SeedWrapper = styled.div`
  width: 100%;
`;

const Home = () => (
  <BackGround>
    <Wrapper>
      <StyledLinks to='/carte'>
        <SeedWrapper>
          <HomeSeed
            Seed={<Seed />}
            Letter={<LetterH />}
          />
        </SeedWrapper>
      </StyledLinks>
      <StyledLinks to='/vins'>
        <SeedWrapper>
          <HomeSeed
            Seed={<Seed />}
            Letter={<LetterA />}
          />
        </SeedWrapper>
      </StyledLinks>
      <StyledLinks to='/restaurant'>
        <SeedWrapper>
          <HomeSeed
            Seed={<Seed />}
            Letter={<LetterU />}
          />
        </SeedWrapper>          
      </StyledLinks>
    </Wrapper>
  </BackGround>
);

export default Home;
