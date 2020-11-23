import React from 'react';
import axios from "axios";
import { useEffect, useState} from "react";
import Astro from './Astro';

export default function AstroList () {
  const [ astro, setAstro ] = useState([])

  const getCrew = () => {
  axios.get('https://fathomless-crag-22198.herokuapp.com/isscrews')
    .then((res) => setAstro(res.data));
     }   

  useEffect( () => {
   getCrew();
  }, []);

return (
  <div>
    <div>
       {astro.map(({index, name, departure, arrival, description, profile_image, wiki, nationality, onboard, flag_image, spaceship}) => (
      <Astro 
      key={index} 
      name={name} 
      departure={departure}
      arrival={arrival}
      description={description}
      profile_image={profile_image}
      wiki={wiki}
      nationality={nationality}
      onboard={onboard}
      flag_image={flag_image}
      spaceship={spaceship}
      />
    ))}
    </div>
  </div>
);
}