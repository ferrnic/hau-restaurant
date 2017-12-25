import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { Image } from "cloudinary-react";

const StyledImage = styled(Image)`
  height: 100vh;
  width: 100%;
`;

const Wrapper = styled.div`
  background-color: cadetblue;
  height: 100%;
  width: 100%;
`;

const SliderMD = () => {
  const handleClick = () => {
    console.log('clicked')
  };
  
  let settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper onClick={handleClick}>
      <Slider {...settings}>
        <StyledImage publicId="Capture_d_écran_2017-12-06_à_21.50.13_ftrcx0.png" />
        {/*{this.state.galleries.restaurant[0] &&*/}
        {/*<Image*/}
        {/*publicId={this.state.galleries.restaurant[0].public_id}*/}
        {/*crop="fill"*/}
        {/*dpr="auto"*/}
        {/*responsive*/}
        {/*/>}*/}
      </Slider>
    </Wrapper>
  );
};

export default SliderMD;
