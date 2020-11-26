import axios from 'axios';
import React from 'react';
import { useEffect, useState} from "react";
import { toast } from "react-toastify";
import { MetrixContainer, Row1, Row2 } from './ISSMetrixCSS';

const url = "https://api.wheretheiss.at/v1/satellites/25544"
export default function ISSMetrix () {

    const [ issData, setIssData ] = useState ({});

    useEffect ( () => {
        axios.get(url)
        .then(({ data }) => {
            setIssData(data);
        },)
        .catch(() => {
            toast("Something bad happened :(");
          });  
    },);
        
    return (
        <div>
        <MetrixContainer>
            <Row1>
                <p>Altitude [km]:{issData.altitude}</p> 
                <p>Latitude [DD]: {issData.latitude}</p>
                <p>Longitude [DD]: {issData.longitude}</p>  
            </Row1>
            <Row2>
                <p>Vitesse [km/s] {issData.velocity}</p>
                <p>Visibility:{issData.visibility} </p>
            </Row2>
        </MetrixContainer>
        </div> 
    )
}