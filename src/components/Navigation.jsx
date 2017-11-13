import React from 'react';
import {NavLink} from "react-router-dom";
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100px;
  margin: 10px;
  border: 5px solid ${props => props.theme.colors.dark};
  .selected {
    color: green;
  }
`;

const Navigation = ({ currentMenu }) => {
  return (
    <Wrapper>
      <NavLink activeClassName="selected" to='/carte'>
        carte
      </NavLink>
      <NavLink activeClassName="selected" to='/restaurant'>
        restaurant
      </NavLink>
      <NavLink activeClassName="selected" to='/vins'>
        vins
      </NavLink>
    </Wrapper>
  );
}

export default Navigation;
