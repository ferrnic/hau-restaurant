import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';

import HomeSeed from './HomeSeed';

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
`;

const SeedWrapper = styled.div`
  width: 100%;
`;

const RightSeedWrapper = SeedWrapper.extend`
  margin-left: 15%;
`;

const Home = () => (
  <BackGround>
    <Wrapper>
      <StyledLinks to='/carte'>
        <SeedWrapper>
          <HomeSeed/>
        </SeedWrapper>
      </StyledLinks>
      <StyledLinks to='/vins'>
        <SeedWrapper>
          <HomeSeed />
        </SeedWrapper>
      </StyledLinks>
      <StyledLinks to='/restaurant'>
        <RightSeedWrapper>
          <HomeSeed rotation={75} />
        </RightSeedWrapper>          
      </StyledLinks>
    </Wrapper>
  </BackGround>
);

export default Home;
