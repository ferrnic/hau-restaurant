import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import MenuContent from '../components/MenuContent';

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
  return (
    <Wrapper>
      <LeftMenu>
        <Logo to="/" />
        <Navigation />
      </LeftMenu>
      <MenuContent/>
      <Slideshow />
    </Wrapper>
  );
}

export default PagesWrapper;
