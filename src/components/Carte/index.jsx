import React from 'react';
import styled from 'styled-components';
import CarteContent from './CarteContent'

const Wrapper = styled.div`
  height: 100vh;
  padding: 50px;
  color: ${props => props.theme.colors.dark};
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
