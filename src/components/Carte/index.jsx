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
  `}
  `;

const H1 = styled.h1`
  font-size: 2.5em;
  line-height: 0.7em;
  text-overflow: ellipsis;
  text-transform: uppercase;
  margin-top: 40px;
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
