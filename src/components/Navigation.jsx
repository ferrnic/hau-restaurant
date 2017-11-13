import React from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

import HomeSeed from './HomeSeed';
import LetterH from '../components/HomeSeed/LetterH';
import LetterA from '../components/HomeSeed/LetterA';
import LetterU from '../components/HomeSeed/LetterU';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5px;

  .selected {
    div {
      svg {
        fill: ${p => p.theme.colors.light};
      }
    }
  }
`;

const StyledLink = styled(NavLink)`
  display: block;
  div {
    height: 70px; 
  }
`;

const Navigation = () => {
  return (
    <Wrapper>
      <StyledLink 
        activeClassName="selected"
        to='/carte'
      >
        <HomeSeed Letter={<LetterH />}>
          carte
        </HomeSeed>
      </StyledLink>
      <StyledLink 
        activeClassName="selected"
        to='/restaurant'
      >
        <HomeSeed Letter={<LetterA />}>
        restaurant
        </HomeSeed>
      </StyledLink>
      <StyledLink 
        activeClassName="selected"
        to='/vins'
      >
        <HomeSeed Letter={<LetterU />}>
        vins
        </HomeSeed>
      </StyledLink>
    </Wrapper>
  );
}

export default Navigation;
