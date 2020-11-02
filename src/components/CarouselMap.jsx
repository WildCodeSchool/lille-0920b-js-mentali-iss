import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './CarouselMap.css';

export default class MyCarousel extends Component {
 
//https://brainhubeu.github.io/react-carousel/docs/gettingStarted
//https://reactjsexample.com/a-react-way-react-component-that-does-not-suck/



  render() {
      
    return (
        
        <div className ='Karousel'> 
      <Carousel 
        arrows>
        
 <img className = 'KarouselImg' src={'https://www.techadvisor.co.uk/cmsdata/features/3592059/how_to_watch_iss_christmas_thumb800.jpg'} />
        <img className = 'KarouselImg' src={'https://www.techadvisor.co.uk/cmsdata/features/3592059/how_to_watch_iss_christmas_thumb800.jpg'} />
        <img className = 'KarouselImg' src={'https://www.techadvisor.co.uk/cmsdata/features/3592059/how_to_watch_iss_christmas_thumb800.jpg'} />
      </Carousel>
      </div>
    
    );
  }}