import React from 'react';
import styled from 'styled-components';
import cloudinary from 'cloudinary-core';

const cloudinaryCore = new cloudinary.Cloudinary({cloud_name: 'hau'});

const createBackgroundImage = (publicId) => {
  const t = new cloudinary.Transformation();
  t.crop('scale').width(2000).quality('auto:low');
  return cloudinaryCore.url(publicId, t);
};

const StyledImage = styled.div`
  position: absolute;
  opacity: ${p => p.isCurrent ? 1 : 0};
  height: 100vh;
  width: 100%;
  background-image: url(${p => createBackgroundImage(p.publicId)});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  cursor: pointer;
`;

const Wrapper = styled.div`
  background-color: ${p => p.theme.colors.dark};
  height: 100%;
  width: 100%;
`;
class SliderMD extends React.Component {
  constructor(props) {
    super(props);
    this.state = { CurrentPicture: 0 }
  }

  handleClick = () => {
    const numberOfPictures = this.props.gallery.length;
    const nextPicture = this.state.CurrentPicture >= numberOfPictures - 1 ? 0 : this.state.CurrentPicture + 1;

    console.log("this.state.CurrentPicture => ", this.state.CurrentPicture);
    console.log("numberOfPictures => ", numberOfPictures);
    console.log("nextPicture => ", nextPicture);

    this.setState({
      CurrentPicture: nextPicture,
    })
  };

  render() {
    return (
      <Wrapper>
        {
          this.props.gallery.map((data, index) => (
            <StyledImage
              onClick={this.handleClick}
              className='imagePlaceholder'
              key={data.public_id}
              publicId={data.public_id}
              isCurrent={index === this.state.CurrentPicture}
            >
            </StyledImage>
          ))
        }
      </Wrapper>
    );
  }
}

export default SliderMD;
