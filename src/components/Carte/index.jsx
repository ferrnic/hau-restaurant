import React from 'react';
import styled, { css } from 'styled-components';
import CarteContent, { Wrapper as CarteContentWrapper } from './CarteContent'

export const Wrapper = styled.div`
  top: 0;
  width: 100%;
  color: ${props => props.theme.colors.dark};
  `;

export const H1 = styled.h1`
  font-size: 1.6em;
  line-height: 0.8em;
  letter-spacing: 0.15em;
  
  overflow-y: hidden;
  text-overflow: ellipsis;
  text-transform: uppercase;
  
  margin-top: 105px;
  margin-bottom: 0.8em;
  
  @media (min-width: ${p => p.theme.breakpoints.verySmall.viewMinWidth}px) {
    font-size: 2em;
  }
   
  @media (min-width: ${p => p.theme.breakpoints.small.viewMinWidth}px) {
    font-size: 2.8em;
  }
`;

const Carte = (props) => {
  const {
    name,
    currentMenu,
  } = props;

  return (
    <Wrapper>
      <H1>{name}</H1>
      <CarteContent content={currentMenu}/>
    </Wrapper>
  );
};

export default Carte;
