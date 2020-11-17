import React from 'react';
import astroData from "./astroData.json"
import axios from "axios";
import { useEffect, useState} from "react";
import Astro from './Astro';

export default function AstroList () {
    const [ astro, setAstro ] = useState(astroData)

    //useEffect( () => {
    //  getCrew();
  //}, [] )

  //const getCrew = () => {
    //axios.get('http://api.open-notify.org/astros.json')
      //.then((response) => response.data)
     // .then((data) => {
      // setAstro(data.people)
      // });      
  //}
  
  return (
    <div>
      <div>
         {astro.map(({index, name, flag, astroImage, description, wiki}) => (
        <Astro 
        key={index} 
        name={name} 
        flag={flag}
        astroImage={astroImage}
        description={description}
        wiki={wiki}
        />
      ))}
      </div>
    </div>
  );
}
