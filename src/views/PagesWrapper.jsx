import React from 'react';
import {Link, Route, Switch} from "react-router-dom";
import styled, {withTheme} from 'styled-components';

import Navigation from '../components/Navigation';
import Carte from '../components/Carte';
import {
  carte,
  carteDescription,
  carteTitle,
  restaurantDescription,
  restaurantTitle,
  vins,
  vinsDescription,
  vinsTitle
} from '../menuData';
import TextLogo from '../components/TextLogo';
import SliderM from "../components/Slideshow/SliderM";
import RestaurantCarte from "../components/Carte/RestaurantCarte";
import SliderS from "../components/Slideshow/SliderS";

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
  padding-bottom: calc(15vh + 30px);
  
  @media (min-width: ${p => p.theme.breakpoints.medium.viewMinWidth}px) {
    width: 50vw;
    min-width: ${p => p.theme.breakpoints.medium.contentSize - 110}px;
    max-width: ${p => p.theme.breakpoints.medium.contentSize - 110}px;
    padding-bottom: 30px;
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

const PagesWrapper = (props) => {
  const { location, galleries } = props;
  const breakpoint = props.theme.breakpoints.medium.viewMinWidth;
  return (
    <Wrapper>
      <LeftMenu>
        <LogoWrapper to="/">
          <TextLogo/>
        </LogoWrapper>
        <Navigation/>
      </LeftMenu>
      <Content>
        <Switch>
          <Route
            path="/carte"
            render={() => (
              <Carte
                name='carte'
                currentMenu={carte}
                title={carteTitle}
                description={carteDescription}
              />
            )}
          />
          <Route
            path="/vins"
            render={() => (
              <Carte
                name='vins'
                currentMenu={vins}
                title={vinsTitle}
                description={vinsDescription}
              />
            )}
          />
          <Route
            path="/restaurant"
            render={() => (
              <RestaurantCarte
                name='restaurant'
                title={restaurantTitle}
                description={restaurantDescription}
              />
            )}
          />
        </Switch>
      </Content>
      {
       props.width < breakpoint
        ? <SliderS gallery={galleries[location.pathname.slice(1)]}/>
        : <SliderM gallery={galleries[location.pathname.slice(1)]}/>
      }
    </Wrapper>
  );
};

export default withTheme(PagesWrapper);
