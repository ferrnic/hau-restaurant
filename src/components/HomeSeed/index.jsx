import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Letter from "./Letter";
import Seed from "./Seed";

const Wrapper = styled.div`
`;

const SeedPath = styled(Seed)`
  opacity: 0;
  z-index: 1;
`;

class HomeSeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHovered: false };
  };

  static propTypes = {
    letter: PropTypes.string.isRequired,
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
        <SeedPath
          to={to}
          onMouseEnter={() => this.mouseHover(true)}
          onMouseLeave={() => this.mouseHover(false)}
          show
        />
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