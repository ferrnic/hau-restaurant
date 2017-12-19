import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

import Navigation from '../components/Navigation';
import Carte from '../components/Carte';
import { carte, vins, restaurant } from '../menuData';
import TextLogo from '../components/TextLogo';
import SliderMD from "../components/Slideshow/SliderMD";

const SlideshowWrapper = styled.div`
  display: none;
  position: relative;
  height: calc(100vh - 40px);
  
  @media (min-width: 800px) {
    display: block;
    flex-grow: 1; // grows as much as space left
  }  
`;

const LeftMenu = styled.div`
  
  position: relative;
  width: 110px;
  height: 100vh;
  
  display: flex;
  flex-direction: column;

  @media (min-width: 800px) {
    height: calc(100vh - 40px);
  }  
  flex-shrink: 0; // does not shrink
`;

const Content = styled.div`
  position: relative;
  height: 100vh;
  width: calc(100vw - 110px);
  overflow-y: auto;
  flex-shrink: 0; // does not shrink
  
  @media (min-width: 800px) {
    height: calc(100vh - 40px);
    width: 50vw;
    max-width: 420px;
  }
`;

const Wrapper = styled.div`
  overflow: hidden;
  background-color: ${p => p.theme.colors.light};
  &::before {
    content: "";
  }
  display: flex;
  align-items: stretch;
 
  @media (min-width: 800px) {
    }
`;

const LogoWrapper = styled(Link)`
  display: block;
  padding: 40px 25px 0;
  svg {
    ${p => p.theme.transitions};
    fill: ${p => p.theme.colors.dark};
    &:hover{
      fill: ${p => p.theme.colors.main};  
    }
  }
`;

const PagesWrapper = ({location, history}) => {
  const handleClick = (name) => {
    if (name !== location.pathname.slice(1)) {
      history.go(`/${name}`);
    }
  };

  return (
    <Wrapper>
      {/*<PageBorders />*/}
      <LeftMenu>
        <LogoWrapper to="/">
          <TextLogo />
        </LogoWrapper>
        <Navigation />
      </LeftMenu>
      <Content>
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
      </Content>
      <SlideshowWrapper>
        <SliderMD />
      </SlideshowWrapper>
      {/* <Slideshow location={location.pathname} /> */}
    </Wrapper>
  );
};

export default PagesWrapper;
