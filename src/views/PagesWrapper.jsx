import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import Navigation from '../components/Navigation';

const BackGround = styled.div`
position: relative;  
width: 100vw;
height: 100vh;
background-color: ${props => props.theme.colors.light};
`;

const Menu = styled.div`
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

const MenuContent = styled.div`
  height: 100vh;
  margin: 10px;
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.light};
  left: 100px;
  position: absolute;
`;

const Slideshow = styled.div`
  position: absolute;
  display: none
`;


const PagesWrapper = ({location}) => {
  return (
    <BackGround>
      <Menu>
        <Logo to="/" />
        <Navigation />
        </Menu>
      <MenuContent/>
      <Slideshow />
    </BackGround>
  );
}

export default PagesWrapper;
