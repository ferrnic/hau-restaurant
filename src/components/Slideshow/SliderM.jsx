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
  cursor: pointer;

  transition: opacity 800ms ease;
  opacity: ${p => p.isCurrent ? 1 : 0};
`;

const Wrapper = styled.div`
  position: relative;
  background-color: ${p => p.theme.colors.dark};
  height: 100%;
  width: 100%;
  
  display: block;
  flex-grow: 1
`;

class SliderM extends React.Component {
  constructor() {
    super();
    this.state = { currentPicture: 0 }
  }

  componentWillMount() {
    setInterval(this.handleClick, 3500)
  }

  handleClick = () => {
    const numberOfPictures = this.props.gallery.length;
    const nextPicture = this.state.currentPicture >= numberOfPictures - 1 ? 0 : this.state.currentPicture + 1;

    this.setState({
      currentPicture: nextPicture,
    })
  };

  render() {
    return (
      <Wrapper>
        {
          this.props.gallery.map((data, index) => (
            <StyledImage
              onClick={this.handleClick}
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
