import React from 'react';
import styled, { css } from 'styled-components';
import Slider from 'react-slick';

const biggerWrapper = css`
  height: 70vh !important;
  max-height: 600px;
`;

const PlaceHolder = styled.div`
position: relative;
width: 100vw;
height: 20vh;
max-height: 200px;

padding: 20px;
background-color: turquoise;
border: 20px solid red;
`;

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  background-color: cadetblue;
  &:hover {
    ${biggerWrapper};

    ${PlaceHolder} { ${biggerWrapper} };
    .slick-slider { ${biggerWrapper} };
    .slick-list { ${biggerWrapper} };
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: gold;
`;

const Slideshow = (props) => {
  const {
    location,
  } = props;
  
  const handleClick = () => {
    console.log('clicked')
  };
  
  let settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <Wrapper onClick={handleClick}>
      <Slider {...settings}>
        <PlaceHolder><Content>1</Content></PlaceHolder>
        <PlaceHolder><Content>2</Content></PlaceHolder>
        <PlaceHolder><Content>3</Content></PlaceHolder>
        <PlaceHolder><Content>4</Content></PlaceHolder>
        <PlaceHolder><Content>5</Content></PlaceHolder>
        <PlaceHolder><Content>6</Content></PlaceHolder>
      </Slider>
    </Wrapper>
  );
};

export default Slideshow;
