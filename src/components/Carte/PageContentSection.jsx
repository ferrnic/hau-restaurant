import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
`;
  

const StyledLine = styled.p`
  display: flex;
  justify-content: space-between;
`;

const StyledName = styled.span`
  line-height: 1em;
`;

const StyledPice = styled.span`
  align-self: flex-end;
  padding-left: 30px;
  font-weight: 600;
`;

const StyledSectionName = styled.h2`
  letter-spacing: 0.3em;
  text-transform: uppercase;
`;
  
const PageContentSection = (props) => {
  const {
    sectionContent
  } = props;

  return (
    <Wrapper>
      <StyledSectionName>{sectionContent.name}</StyledSectionName>
      {sectionContent.items.map((dish) => { 
        return (
          <StyledLine key={dish.name}>
            <StyledName>{dish.name}</StyledName>
            <StyledPice>{dish.price}</StyledPice>
          </StyledLine>
        )
      })}
    </Wrapper>
  );
}

export default PageContentSection;
