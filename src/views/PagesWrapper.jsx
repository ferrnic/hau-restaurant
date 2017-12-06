import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

import { media } from './../theme';

import Navigation from '../components/Navigation';
import Slideshow from '../components/Slideshow';
import Carte from '../components/Carte';
import { carte, vins, restaurant } from '../menuData';
import TextLogo from '../components/TextLogo';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  background-color: ${p => p.theme.colors.light};
`;

const LeftMenu = styled.div`
  left: 0;
  height: 100%;
  width: 110px;

  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  overflow-y: auto;
  flex-grow: 0;
  width: calc( 100vw - 60px );

  ${media.medium`
    max-width: ${props => (props.theme.breakpoints.width.medium - 60)}px;
  `};
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
      history.go(`/${name}`)
    }
  };

  return (
    <Wrapper>
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
      <Slideshow location={location.pathname} />
    </Wrapper>
  );
};

export default PagesWrapper;
