import React from 'react';
import peopleData from "./peopleData.json"
import axios from "axios";
import { useEffect, useState} from "react";
import Astro from './Astro';

export default function AstroList () {
    const [ people, setPeople ] = useState(peopleData)

    useEffect( () => {
        getCrew();
    }, [] )

    const getCrew = () => {
      axios.get('http://api.open-notify.org/astros.json')
        .then((response) => response.data)
        .then((data) => {
         setPeople(data.people)
         });      
    }

  return (
    <div>
      <div>
         {people.map(({index, name, flag, astroImage, description, wiki}) => (
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


