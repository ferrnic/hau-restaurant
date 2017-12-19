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
  @media (min-width: 800px) {
    
  }
  `;

const H1 = styled.h1`
  font-size: 2em;
  overflow-y: hidden;
  line-height: 0.8em;
  text-overflow: ellipsis;
  text-transform: uppercase;
  margin-bottom: 1.2em;
  letter-spacing: 0.15em;
  margin-top: 105px;
  
  @media (min-width: 600px) {
    font-size: 48px;
  }
   
  @media (min-width: 800px) {
    //font-size: 4em;
  }   
  
  @media (min-width: 1000px) {
    //font-size: 4.5em;
  }
`;

const Carte = (props) => {
  const {
    name,
    onClick,
    isCurrent,
    currentMenu,
  } = props;

  const handleClick = () => {
    onClick(name)
  };

  return (
    <Wrapper isCurrent={isCurrent} onClick={handleClick}>
      <H1>{name}</H1>
      <CarteContent content={currentMenu}/>
    </Wrapper>
  );
};

export default Carte;
