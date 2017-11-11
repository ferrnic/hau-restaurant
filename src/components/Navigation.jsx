import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100px;
  margin: 10px;
  border: 5px solid ${props => props.theme.colors.dark};
`;

const Navigation = () => {
  return (
    <Wrapper>
      <ul><Link to='/carte'>carte</Link></ul>
      <ul><Link to='/restaurant'>restaurant</Link></ul>
      <ul><Link to='/vins'>vins</Link></ul>
    </Wrapper>
  );
}

export default Navigation;
