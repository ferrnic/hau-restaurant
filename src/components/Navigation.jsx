import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100px;
  margin: 10px;
  background-color: ${props => props.theme.colors.dark};
`;

const Navigation = () => {
  return (
    <Wrapper></Wrapper>
  );
}

export default Navigation;
