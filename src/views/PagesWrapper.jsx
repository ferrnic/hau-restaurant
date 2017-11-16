import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

import { media, breakpoints } from './../theme';

import Navigation from '../components/Navigation';
import Carte from '../components/Carte';
import { carte, vins, restaurant } from '../menuData';

const Wrapper = styled.div`
  position: relative;  
  width: 100vw;
  display: flex;
`;

const LeftMenu = styled.div`
  position: relative
  padding: 10px;
  background-color: ${props => props.theme.colors.main};
  position: fixed;
  left: 0;
  height: 100vh;
  width: 100px;

  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  position: relative;
  left: 100px;
  width: 100%;
  max-width: calc( 100vw - 100px );
  
  background-color: slategray;

  ${media.medium`
    background-color: lightGrey;
    max-width: ${props => (props.theme.breakpoints.width.medium - 100)}px;
  `};
  ${media.large`
    background-color: red;
  `};
`;

const Logo = styled(Link)`
  display: block;
  height: 100px;
  margin: 10px;
  background-color: ${props => props.theme.colors.dark};
`;

const Slideshow = styled.div`
  position: absolute;
  display: none
`;

const PagesWrapper = ({location, history}) => {
  const handleClick = (name) => {
    if (name !== location.pathname.slice(1)) {
      history.go(`/${name}`)
    }
  }

  return (
    <Wrapper>
      <LeftMenu>
        <Logo to="/" />
        <Navigation />
      </LeftMenu>
      <Content>
        <Carte
        className=""
        name='carte'
        isCurrent={location.pathname === '/carte'}
        onClick={name => handleClick(name)}
        currentMenu={carte}
        >
          carte
        </Carte>
        <Carte
        name='restaurant'
        isCurrent={location.pathname === '/restaurant'}
        onClick={name => handleClick(name)}
        currentMenu={restaurant}
        >
          restaurant
        </Carte>
        <Carte
        name='vins'
        isCurrent={location.pathname === '/vins'}
        onClick={name => handleClick(name)}
        currentMenu={vins}
        >
          vins
        </Carte>
      </Content>
      <Slideshow />
    </Wrapper>
  );
}

export default PagesWrapper;
