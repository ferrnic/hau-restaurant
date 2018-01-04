import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Letter from "./Letter";
import Seed from "./Seed";
import {NavLink} from "react-router-dom";

const Wrapper = styled.div`
`;

const SeedPath = styled(Seed)`
  &:hover {
    cursor: pointer;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  width: 100%;
  height: 100%;
  background-color: rebeccapurple;
  
  &:focus { 
    outline: none; 
  }
`;

class HomeSeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHovered: false };
  }

  propTypes = {
    letter: PropTypes.element.isRequired,
  };

  mouseHover = (isHovered) => {
    this.setState({
      isHovered: isHovered,
    });
  };

  render() {
    const { letter, to, className } = this.props;
    return (
      <Wrapper className={className}>
        <div/>
        <StyledNavLink to={to}>
          <SeedPath
            onMouseEnter={() => this.mouseHover(true)}
            onMouseLeave={() => this.mouseHover(false)}
          />
        </StyledNavLink>
        <Seed
          show={!this.state.isHovered}
        />
        <Letter
          show={this.state.isHovered}
          letter={letter}
        />
      </Wrapper>
    );
  };
}

export default HomeSeed;