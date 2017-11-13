import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
`;
  
const StyledName = styled.span`
`;

const StyledPice = styled.span`
`;

const StyledLine = styled.p`
  display: flex;
  justify-content: space-between;
`;
  
const PageContentSection = (props) => {
  const {
    sectionContent
  } = props;

  return (
    <Wrapper>
      <h4>{sectionContent.name}</h4>
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
