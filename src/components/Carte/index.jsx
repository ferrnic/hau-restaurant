import React from 'react';
import styled from 'styled-components';
import CarteContent from './CarteContent'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  padding: 0 50px;
  color: ${props => props.theme.colors.dark};
  opacity: ${props => props.isCurrent ? '1' : '0.2'};
`;

const H1 = styled.h1`
  font-size: 4em;
  text-transform: uppercase;
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
}

export default Carte;
