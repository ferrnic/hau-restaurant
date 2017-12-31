import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.li`
`;

const SectionName = styled.h2`
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

const Items = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ItemLine = styled.li`
  display: flex;
  justify-content: space-between;
  line-height: 1.8em;
`;

const ItemName = styled.span`
`;

const ItemPrice = styled.span`
  align-self: flex-end;
  padding: 0 30px;
  //font-weight: 600;
`;

const CarteContentSection = (props) => {
  const {
    sectionContent
  } = props;

  return (
    <Wrapper>
      <SectionName>{sectionContent.name}</SectionName>
      <Items>
        {sectionContent.items.map((dish) => { 
          return (
            <ItemLine key={dish.name}>
              <ItemName>{dish.name}</ItemName>
              <ItemPrice>{dish.price}</ItemPrice>
            </ItemLine>
          )
        })}
      </Items>
    </Wrapper>
  );
};

export default CarteContentSection;
