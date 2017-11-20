import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Seed from './Seed';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  
  *{
    position: absolute;
  }
  
  .letter{
    width: 60%;
    opacity: 0;
  }

  
  .seed{
  }

  &:hover{
    .seed{
      opacity: 0;
    }
    .letter{
      opacity: 1;
    }
  }
`;

const HomeSeed = ({Seed, Letter}) => (
  <Wrapper>
    {Seed}
    {Letter}  
  </Wrapper>
);

HomeSeed.propTypes = {
  Seed: PropTypes.element,
  Letter: PropTypes.element.isRequired,
}

HomeSeed.defaultProps = {
  Seed: <Seed />,
}

export default HomeSeed;