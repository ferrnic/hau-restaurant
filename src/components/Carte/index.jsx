import React from 'react';
import styled from 'styled-components';
import CarteContent from './CarteContent'

const Wrapper = styled.div`
  height: 100vh;
  margin: 10px;
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.light};
  left: 100px;
  position: absolute;
  visibility: ${props => props.isCurrent ? 'visible' : 'hidden'};
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
      <h1>{name}</h1>
      <CarteContent content={currentMenu}/>
    </Wrapper>
  );
}

export default Carte;
