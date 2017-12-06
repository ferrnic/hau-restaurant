import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.li`
`;

const SectionName = styled.h2`
  text-transform: uppercase;
  color: ${p => p.theme.colors.main};
  margin: 45px 0 15px;
  letter-spacing: 0.3em;
  font-weight: 400;
  transform:scale(1,1.1);
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
  text-overflow: ellipsis;  
`;

const ItemPrice = styled.span`
  align-self: flex-end;
  padding: 0 30px;
  font-weight: 600;
`;

const PageContentSection = (props) => {
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

export default PageContentSection;
