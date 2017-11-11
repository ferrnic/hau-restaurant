import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  transform: rotate(${p => p.rotation}deg);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  
  *{
    position: absolute;
    fill: ${p => p.theme.colors.dark};
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
  <Wrapper >
    {Seed}
    {Letter}  
  </Wrapper>
);

export default HomeSeed;