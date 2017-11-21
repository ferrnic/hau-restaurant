import React from 'react';
import styled, { css } from 'styled-components';

const biggerWrapper = css`
  height: 70vh;
  max-height: 600px;
`;

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 20vh;
  max-height: 200px;
  background-color: cadetblue;

  &:hover {
    ${biggerWrapper}
  }
`;

const Slideshow = (props) => {
  const {
    location,
  } = props;
  
  const handleClick = () => {
    console.log('clicked')
  };

  return (
    <Wrapper onClick={handleClick}>
      image
    </Wrapper>
  );
}

export default Slideshow;
