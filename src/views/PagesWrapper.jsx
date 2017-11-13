import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';

import Navigation from '../components/Navigation';
import Carte from '../components/Carte';
import { carte, vins, restaurant } from '../menuData';

const Wrapper = styled.div`
  position: relative;  
  width: 100vw;
  height: 100vh;
`;

const LeftMenu = styled.div`
  padding: 10px;
  background-color: ${props => props.theme.colors.main};
  position: fixed;
  left: 0;
  height: 100vh;
  width: 100px;
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
      <Carte
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
      <Slideshow />
    </Wrapper>
  );
}

export default PagesWrapper;
