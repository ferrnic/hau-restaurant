import React from 'react';
import styled, { css } from 'styled-components';
import CarteContent, { Wrapper as CarteContentWrapper } from './CarteContent'

const Wrapper = styled.div`
  top: 0;
  width: 100%;
  color: ${props => props.theme.colors.dark};
  ${props => !props.isCurrent && css`
    position:absolute;
    opacity: 0;
    height: 100vh;
    overflow: hidden;
    ${CarteContentWrapper} {
      position: relative;
      height: auto;
    }
  `};
  `;

const H1 = styled.h1`
  font-size: 1.6em;
  overflow-y: hidden;
  line-height: 0.8em;
  text-overflow: ellipsis;
  text-transform: uppercase;
  margin-bottom: 1.2em;
  letter-spacing: 0.15em;
  margin-top: 105px;
  
  
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
    isCurrent,
    currentMenu,
  } = props;

  return (
    <Wrapper isCurrent={isCurrent}>
      <H1>{name}</H1>
      <CarteContent content={currentMenu}/>
    </Wrapper>
  );
};

export default Carte;
