import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  transform: rotate(${p => p.rotation}deg);
`;

const HomeSeed = ({rotation}) => (
  <Wrapper rotation={rotation} >
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 62 62" xmlSpace="preserve">
      <g id="Mode_Isolation">
        <path className="st2" d="M3.6,53.3c0,0,71-11.3,51.4-38.1S3.6,53.3,3.6,53.3z"/>
      </g>
    </svg>
  </Wrapper>
);

export default HomeSeed;
