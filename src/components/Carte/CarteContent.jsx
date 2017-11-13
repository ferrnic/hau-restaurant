import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PageContentSection from './PageContentSection';

const Wrapper = styled.div`
  `;
  
  
const CarteContent = (props) => {
  const {
    content
  } = props;

  return (
    <Wrapper>
      {content.map((section) => { 
        return (
          <PageContentSection
            key={section.name}
            sectionContent={section}
          />
        )
      })}
    </Wrapper>
  );
}

CarteContent.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          price: PropTypes.number.isRequired,
        })
      ).isRequired
    })
  ).isRequired
}

export default CarteContent;
