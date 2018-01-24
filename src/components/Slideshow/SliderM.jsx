import React from 'react';
import styled from 'styled-components';
import cloudinary from 'cloudinary-core';

const cloudinaryCore = new cloudinary.Cloudinary({cloud_name: 'hau'});

const createBackgroundImage = (publicId) => {
  const t = new cloudinary.Transformation();
  t.crop('scale').width(2000).quality('auto:good');
  return cloudinaryCore.url(publicId, t);
};

const StyledImage = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  background: url(${p => createBackgroundImage(p.publicId)}) no-repeat center center;
  background-size: cover;
  cursor: none;

  transition: opacity 800ms ease;
  opacity: ${p => p.isCurrent ? 1 : 0};
`;

const Arrow = styled.div.attrs({
  style: props => ({
    left: (props.x - 490) + 'px',
    top: (props.y)+ 'px',
  })
})`
  
  border: solid ${p => p.theme.colors.light};
  border-width: 3px 0 0 3px;
  transform-origin: top left;
  display: inline-block;
  padding: 15px;

  z-index: 10;
  position: absolute;
  
  opacity: 0;
  transition: opacity 300ms ease, transform 600ms ease;
`;

const LeftContainer = styled.div`
  &:hover ~ ${Arrow} {
    transform: rotate(-45deg);
  }
`;

const RightContainer = styled.div`
  &:hover ~ ${Arrow} {
    transform: rotate(135deg);
  }
`;

const ArrowContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: stretch;
  
  ${RightContainer}, ${LeftContainer} {
    z-index: 20;
    flex-basis: 50%;
  }
`;

const Wrapper = styled.div`
  position: relative;
  background-color: ${p => p.theme.colors.dark};
  height: 100vh;
  width: 100%;
  
  display: block;
  flex-grow: 1;
  
  &:hover {
    cursor: none;
    ${Arrow} {
      opacity: 1;
    }
  }
`;

class SliderM extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPicture: 0,
      mouseX: null,
      mouseY: null,
    }
  }

  componentWillMount() {
    setInterval(this.handleClickNext, 3500)
  }

  _onMouseMove(e) {
    this.setState({
      mouseX: e.pageX,
      mouseY: e.pageY,
    });
  }

  handleClickNext = () => {
    const lastIndex = this.props.gallery.length - 1;
    const nextPicture = this.state.currentPicture >= lastIndex ? 0 : this.state.currentPicture + 1;

    this.setState({
      currentPicture: nextPicture,
    })
  };

  handleClickPrevious = () => {
    const lastIndex = this.props.gallery.length -1;
    const previousPicture = this.state.currentPicture <= 0 ? lastIndex : this.state.currentPicture - 1;

    this.setState({
      currentPicture: previousPicture,
    })
  };

  render() {
    return (
      <Wrapper onMouseMove={this._onMouseMove.bind(this)}>
        <ArrowContainer>
          <LeftContainer onClick={this.handleClickPrevious} />
          <RightContainer onClick={this.handleClickNext} />
          <Arrow
            y={this.state.mouseY}
            x={this.state.mouseX}
          />
        </ArrowContainer>
        {
          this.props.gallery.map((data, index) => (
            <StyledImage
              key={data.public_id}
              publicId={data.public_id}
              isCurrent={index === this.state.currentPicture}
            >
            </StyledImage>
          ))
        }
      </Wrapper>
    );
  }
}

export default SliderM;
