import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import styled from 'styled-components';

const size = {
  xs: '320px',
  sm: '768px',
  lg: '1200px',
 };

const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  lg: `(min-width: ${size.lg})`,
 };

const Karousel = styled.div
 `margin-top: 10vh;
  width: 99vw;
  position: center;
  @media ${device.sm} {
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