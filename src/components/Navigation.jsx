import React from 'react';
import { NavLink } from "react-router-dom";
import styled, { css } from 'styled-components';

import HomeSeed, { Wrapper as HomeSeedWrapper } from './HomeSeed';
import LetterH from '../components/HomeSeed/LetterH';
import LetterA from '../components/HomeSeed/LetterA';
import LetterU from '../components/HomeSeed/LetterU';
import { StyledSeed } from '../components/HomeSeed/Seed';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;

  div {
    svg {
      fill: ${p => p.theme.colors.dark};
    }
  }

  .selected {
    div {
      svg {
        fill: ${p => p.theme.colors.main};
      }
    }
  }
`;

const StyledLink = styled(NavLink)`
  display: block;
  ${HomeSeedWrapper} {
    height: 80px; 
  }

  // rotate and shift the seeds
  ${p => p.rotate && css`${StyledSeed} { transform: rotate(${p.theme.seedRotation[3]}deg); `}
  ${p => p.translate && css`${HomeSeedWrapper} { transform: translateX(3px) translateY(-10px); `}
`;

const Navigation = () => {
  return (
    <Wrapper>
      <StyledLink
        translate 
        activeClassName="selected"
        to='/carte'
      >
        <HomeSeed
          Letter={<LetterH />}
        />
      </StyledLink>
      <StyledLink
        rotate 
        activeClassName="selected"
        to='/vins'
      >
        <HomeSeed
          Letter={<LetterA />}
        />
      </StyledLink>
      <StyledLink
        rotate
        activeClassName="selected"
        to='/restaurant'
      >
        <HomeSeed
          Letter={<LetterU />}
        />
      </StyledLink>
    </Wrapper>
  );
}

export default Navigation;
