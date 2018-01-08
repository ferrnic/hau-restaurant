import React from 'react';
import styled from 'styled-components';
import cloudinary from 'cloudinary-core';

const cloudinaryCore = new cloudinary.Cloudinary({cloud_name: 'hau'});

const createBackgroundImage = (publicId) => {
  const t = new cloudinary.Transformation();
  t.crop('scale').width(1000).quality('auto:good');
  return cloudinaryCore.url(publicId, t);
};

const ImagesContainer = styled.div`
  position: fixed;
  bottom: 0;
  height: ${p => p.open ? '85vh' : '15vh'};
  width: 100%;
  cursor: pointer;
  transition: height 500ms ease;
`;

const Background = styled.div`
  position:absolute;
  height: 100%;
  width: 100%;
  background-color: ${p => p.theme.colors.dark};
`;

const StyledImage = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: url(${p => createBackgroundImage(p.publicId)}) no-repeat center center;
  background-size: cover;
  opacity: ${p => p.isCurrent ? 1 : 0};
  transition: opacity 800ms ease;
`;

const Wrapper = styled.div`
  position: absolute;
`;

const SlideCloser = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  cursor: pointer;
`;

class SliderS extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPicture: 0,
      sliderOpen: false,
    }
  }

  componentWillMount() {
    setInterval(this.slideToNextPicture, 3500)
  }

  slideToNextPicture = () => {
    const numberOfPictures = this.props.gallery.length;
    const nextPicture = this.state.currentPicture >= numberOfPictures - 1 ? 0 : this.state.currentPicture + 1;

    this.setState({ currentPicture: nextPicture })
  };

  toggleSlider = () => {
    this.setState({ sliderOpen: !this.state.sliderOpen })
  };

  handleClick = (e) => {
    e.stopPropagation();
    this.state.sliderOpen ? this.slideToNextPicture() : this.toggleSlider();
  };

  handleCloseSlider = () => {
    this.state.sliderOpen && this.toggleSlider();
  };

  render() {
    return (
      <Wrapper>
        {
          this.state.sliderOpen &&
          <SlideCloser onClick={this.handleCloseSlider}/>
        }
        <ImagesContainer open={this.state.sliderOpen}>
          <Background />
          {
            this.props.gallery.map((data, index) => (
              <StyledImage
                onClick={e => this.handleClick(e)}
                key={data.public_id}
                publicId={data.public_id}
                isCurrent={index === this.state.currentPicture}
              >
              </StyledImage>
            ))
          }
        </ImagesContainer>
      </Wrapper>
    );
  }
}

export default SliderS;
