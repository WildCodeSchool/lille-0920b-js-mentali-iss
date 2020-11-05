import React from 'react';
import './DisplayCrew.css';

function DisplayCrew({ quotes }){
    return (
        <figure className="displaySimpsons">
          <img src="" alt="" />
        <figcaption>
          <blockquote>message: {quotes.message}</blockquote>
          <p>
            <cite>number :{quotes.number}</cite>
          </p>
          <p>name : {quotes.name}</p>
          <p>craft : {quotes.craft}</p>
        </figcaption>
      </figure>
    );
};

export default DisplayCrew;
