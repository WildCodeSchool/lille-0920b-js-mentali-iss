import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import styled from 'styled-components';
import { device } from "./Device";

const Karousel = styled.div`
  margin-top: 2vh;
  margin-bottom: 2vh;
  width: 100%;
  position: center;
  @media ${device.mobile} {
    display: none;
    }
`
export default class MyCarousel extends Component {

  render() {
    return ( 
      <Karousel> 
        <Carousel arrows>
        <img className = 'KarouselImg' src={"/photos/pexels1.jpg"} width='1250' height='650' alt="#1" />
        <img className = 'KarouselImg' src={'/photos/pexels2.jpg'} width='1250' height='650' alt="#1"/>
        <img className = 'KarouselImg' src={'/photos/pexels3.jpg'} width='1250' height='650' alt="#1"/>
      </Carousel>
      </Karousel>
    );
  }}