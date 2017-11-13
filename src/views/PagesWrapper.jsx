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

const PagesWrapper = ({location}) => {
  // const currentMenu = location.pathname.slice(1);

  return (
    <Wrapper>
      <LeftMenu>
        <Logo to="/" />
        <Navigation />
      </LeftMenu>
      <Carte isCurrent={location.pathname == '/carte'} >carte</Carte>
      <Carte isCurrent={location.pathname == '/restaurant'} >restaurant</Carte>
      <Carte isCurrent={location.pathname == '/vins'} >vins</Carte>
      <Slideshow />
    </Wrapper>
  );
}

export default PagesWrapper;
