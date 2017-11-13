import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
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
          <p key={dish.name}>
            <span>{dish.name}</span>
            <span>{dish.price}</span>
          </p>
        )
      })}
    </Wrapper>
  );
}

export default PageContentSection;
