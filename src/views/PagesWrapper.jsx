import React from 'react';
import {Link, Route, Switch} from "react-router-dom";
import styled from 'styled-components';

import Navigation from '../components/Navigation';
import Carte from '../components/Carte';
import { carte, vins, restaurant } from '../menuData';
import TextLogo from '../components/TextLogo';
import SliderMD from "../components/Slideshow/SliderMD";
import Home from "./Home";
import RestaurantCarte from "../components/Carte/RestaurantCarte";

const SlideshowWrapper = styled.div`
  display: none;
  position: relative;
  
  @media (min-width: ${p => p.theme.breakpoints.medium.viewMinWidth}px) {
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
  flex-shrink: 0; // does not shrink
`;

const Content = styled.div`
  position: relative;
  height: 100vh;
  width: calc(100vw - 110px);
  overflow-y: scroll;
  flex-shrink: 0; // does not shrink
  padding-bottom: 30px;
  
  @media (min-width: ${p => p.theme.breakpoints.medium.viewMinWidth}px) {
    width: 50vw;
    min-width: ${p => p.theme.breakpoints.medium.contentSize - 110}px;
    max-width: ${p => p.theme.breakpoints.medium.contentSize - 110}px;
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

const PagesWrapper = ({location, galleries }) => {
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
        <Switch>
          <Route
            path="/carte"
            render={() => (
              <Carte
                name='carte'
                currentMenu={carte}
              />
            )}
          />
          <Route
            path="/vins"
            render={() => (
              <Carte
                name='vins'
                currentMenu={vins}
              />
            )}
          />
          <Route
            path="/restaurant"
            render={() => (
              <RestaurantCarte
                name='restaurant'
                gallery={galleries.restaurant}
              />
            )}
          />
        </Switch>
      </Content>
      <SlideshowWrapper>
        <SliderMD gallery={galleries[location.pathname.slice(1)]}/>
      </SlideshowWrapper>
    </Wrapper>
  );
};

export default PagesWrapper;
