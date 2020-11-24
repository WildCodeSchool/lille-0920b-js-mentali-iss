import axios from 'axios';
import React from 'react';
import { useEffect, useState} from "react";

const url = "https://api.wheretheiss.at/v1/satellites/25544"
export default function ISSMetrix () {

    const [ issData, setIssData ] = useState ({});

    useEffect ( () => {
        axios.get(url)
        .then(({ data }) => {
            setIssData(data);
        })
        .catch(() => {
            console.log("Something bad happened :(");
          });
    }, );

    return (
        <p>{issData.longitude} {issData.altitude} {issData.latitude}  {issData.velocity} {issData.visibility} </p>
    )




}