import React from 'react';
//import styled from 'styled-components';
import MapPageCards2 from './MapPageCards2';

class InSpace2 extends React.Component {
    constructor(props) {
      super(props);
      this.state={
        astrolist:[
            {
                name: "Sergey Ryzhikov",
                flag: "./photos/Russia.png",
                astroImage: "./photos/AnatoliIvanishin.jpg",
                description: "Sergueï Nikolaïévitch Ryjikov (en russe : Сергей Николаевич Рыжиков) (aussi transcrit Ryzhikov) est un cosmonaute russe ...",
                wiki: "https://fr.wikipedia.org/wiki/Anatoli_Ivanichine"
              },
              {
                name: "Kate Rubins",
                flag: "./photos/Usa.png",
                astroImage: "./photos/KateRubins.jpg",
                description: "Kate Rubins, née le 14 octobre 1978 à Farmington au Connecticut, est une astronaute américaine ...",
                wiki: "https://fr.wikipedia.org/wiki/Kathleen_Rubins"
              },
              {
                name: "Sergey Kud-Sverchkov",
                flag: "./photos/Russia.png",
                astroImage: "./photos/SergeyKudSverchkov.png",
                description: "Sergueï Vladimirovitch Koud-Skvertchkov (en russe : Сергей Владимирович Кудь-Сверчков) est un cosmonaute russe ...",
                wiki: "https://fr.wikipedia.org/wiki/Sergue%C3%AF_Koud-Skvertchkov"
              },
            ],
        };
    }

render () {
  return (
    <div>
      <div>
         {this.state.astrolist.map((name, index) => (
        <MapPageCards2 key={index} {...name} />
      ))}
      </div>
    </div>
  );
}
}

export default InSpace2;


  


 

