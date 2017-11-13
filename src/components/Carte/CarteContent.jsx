import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  `;
  
  
const CarteContent = (props) => {
  const {
    content
  } = props;

  return (
    <Wrapper>
      {content.toString()}
    </Wrapper>
  );
}

export default CarteContent;
