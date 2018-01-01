import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  
  *{
    position: absolute;
  }
  
  .letter {
    width: 60%;
    opacity: 0;
  }
  
  .seedPath {
  }

  &:hover {
    .seedPath {
      opacity: 0.1;
    }
    .letter {
      opacity: 1;
    }
  }
`;

const HomeSeed = ({Seed, Letter}) => (
  <Wrapper>
    {Letter}
    {Seed}
  </Wrapper>
);

HomeSeed.propTypes = {
  Seed: PropTypes.element.isRequired,
  Letter: PropTypes.element.isRequired,
};

export default HomeSeed;