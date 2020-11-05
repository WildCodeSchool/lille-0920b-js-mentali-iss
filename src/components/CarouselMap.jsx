import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import styled from 'styled-components';

//https://brainhubeu.github.io/react-carousel/docs/gettingStarted
//https://reactjsexample.com/a-react-way-react-component-that-does-not-suck/

const Karousel = styled.div
 `margin-top: 15vh;
  margin-left: 10px;
  width: 98vw;
`
export default class MyCarousel extends Component {

  render() {
    return ( 
      <Karousel> 
        <Carousel arrows>
        <img className = 'KarouselImg' src={'https://www.techadvisor.co.uk/cmsdata/features/3592059/how_to_watch_iss_christmas_thumb800.jpg'} alt="#1" />
        <img className = 'KarouselImg' src={'https://www.techadvisor.co.uk/cmsdata/features/3592059/how_to_watch_iss_christmas_thumb800.jpg'} alt="#1"/>
        <img className = 'KarouselImg' src={'https://www.techadvisor.co.uk/cmsdata/features/3592059/how_to_watch_iss_christmas_thumb800.jpg'} alt="#1"/>
      </Carousel>
      </Karousel>
    );
  }}