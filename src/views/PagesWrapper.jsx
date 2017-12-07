import React from 'react';
import {Link} from "react-router-dom";
import styled, { css } from 'styled-components';

import { media } from './../theme';

import Navigation from '../components/Navigation';
import Slideshow from '../components/Slideshow';
import Carte from '../components/Carte';
import { carte, vins, restaurant } from '../menuData';
import TextLogo from '../components/TextLogo';

const initialBorderCss = css`
  @media (max-width: 800px) {
    display: none;
  }
  background-color: ${p => p.theme.colors.dark};
  position: fixed;
  z-index: 10;
`;

const leftRightCss = css`
  top: 0;
  bottom: 0;
  width: 20px;
`;

const TopBottom = css`
  left: 0;
  right: 0;
  height: 20px;
`;

const BorderLeft = styled.div`
  ${initialBorderCss}
  ${leftRightCss}
  left: 0;
`;
const BorderRight = styled.div`
  ${initialBorderCss}
  ${leftRightCss}
  right: 0;
`;
const BorderTop = styled.div`
  ${initialBorderCss}
  ${TopBottom}
  top: 0;
`;
const BorderBottom = styled.div`
  ${initialBorderCss}
  ${TopBottom}
  bottom: 0;
`;

const Wrapper = styled.div`
  overflow: hidden;
  background-color: ${p => p.theme.colors.light};
  &::before {
    content: "";
    
  }
`;

const LeftMenu = styled.div`
  position: fixed;
  left: 0;
  height: 100%;
  width: 110px;

  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  left: 110px;
  width: calc( 100vw - 110px );
  position: relative;
  min-height: 100vh;
 background-color: aliceblue;
  @media (min-width: 800px) {
    max-width: calc(800px - 110px);
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
      <BorderLeft />
      <BorderRight />
      <BorderTop />
      <BorderBottom />
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
      {/* <Slideshow location={location.pathname} /> */}
    </Wrapper>
  );
};

export default PagesWrapper;
