import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  margin: 10px;
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.light};
  left: 100px;
  position: absolute;
  `;
  
  
const Carte = ({ currentMenu }) => {
  return (
    <Wrapper>
      lalalallala
    </Wrapper>
  );
}

export default Carte;
