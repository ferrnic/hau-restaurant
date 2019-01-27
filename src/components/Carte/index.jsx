import React from 'react';
import styled from 'styled-components';
import {Helmet} from "react-helmet";

export const Wrapper = styled.div`
  top: 0;
  width: 100%;
  color: ${props => props.theme.colors.dark};
`;

export const H1 = styled.h1`
  font-size: 1.6em;
  line-height: 0.8em;
  letter-spacing: 0.15em;
  
  overflow-y: hidden;
  text-overflow: ellipsis;
  text-transform: uppercase;
  
  margin-top: 105px;
  margin-bottom: 0.8em;
  
  @media (min-width: ${p => p.theme.breakpoints.verySmall.viewMinWidth}px) {
    font-size: 2em;
  }
   
  @media (min-width: ${p => p.theme.breakpoints.small.viewMinWidth}px) {
    font-size: 2.8em;
  }
`;

export const Content = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const ContentSection = styled.li`
`;

export const SectionName = styled.h2`
  text-transform: uppercase;
  color: ${p => p.theme.colors.main};
  margin: 20px 0 8px;
  letter-spacing: 0.3em;
  font-weight: 400;
  transform:scale(1,1.1);
  line-height: 1.1em;
  
  font-size: 1.3em;
  @media (min-width: ${p => p.theme.breakpoints.medium}px) {
    font-size: 1.5em;
  } 
`;

export const Items = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const ItemLine = styled.li`
  display: flex;
  justify-content: space-between;
  line-height: 1.8em;
  padding-right: 30px;
`;

export const ItemName = styled.span`
`;

export const ItemPrice = styled.span`
  align-self: flex-end;
  padding-left: 30px;
`;

const Carte = (props) => {
  const {
    name,
    currentMenu,
    title,
    description
  } = props;

  return (
    <Wrapper>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <H1>{name}</H1>
      <Content>
        {currentMenu.map((section, index) =>
          <ContentSection key={index}>
            <SectionName>{section.name}</SectionName>
            <Items>
              {section.items.map((dish, index) =>
                <ItemLine key={index}>
                  <ItemName>{dish.name}</ItemName>
                  <ItemPrice>{dish.price}</ItemPrice>
                </ItemLine>
              )}
            </Items>
          </ContentSection>
        )}
      </Content>
    </Wrapper>
  );
};

export default Carte;
