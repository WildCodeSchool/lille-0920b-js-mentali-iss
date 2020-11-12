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
                description: "Sergueï Nikolaïévitch Ryjikov (Сергей Николаевич Рыжиков) (aussi transcrit Ryzhikov) is a Russian cosmonaut ...",
                wiki: "https://en.wikipedia.org/wiki/Sergey_Ryzhikov_(cosmonaut)"
              },
              {
                name: "Kate Rubins",
                flag: "./photos/Usa.png",
                astroImage: "./photos/KateRubins.jpg",
                description: "Kate Rubins is an American microbiologist and NASA astronaut....",
                wiki: "https://en.wikipedia.org/wiki/Kathleen_Rubins"
              },
              {
                name: "Sergey Kud-Sverchkov",
                flag: "./photos/Russia.png",
                astroImage: "./photos/SergeyKudSverchkov.png",
                description: "Sergueï Vladimirovitch Koud-Skvertchkov (Сергей Владимирович Кудь-Сверчков) was born on August 23, 1983 at the  ...",
                wiki: "https://en.wikipedia.org/wiki/Sergey_Kud-Sverchkov"
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


  


 

