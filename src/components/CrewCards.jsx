import styles from './CrewCards.css';
import React from 'react';

const CrewCards = () => {
  return (
    <div className="Crewcards">
      <header className="Crewheader">
        <img src="./photos/IvanWagner.jpg" className="Astrophoto" alt="Ivan Wagner" />
      </header>
      <section className="Crewsection">
        <div className="Astrotitle">
          <h2 className="Astroname">Ivan Wagner</h2>
          <img src="./photos/Russia.png" className="Astroflag" />
        </div>
        <hr className="trait"/>
        <p className="description">Ivan Viktorovitch Vagner (en russe : Иван Викторович Вагнер), 
        né le 10 juillet 1985 à Severonejsk dans l'Oblast d'Arkhangelsk en Russie est un cosmonaute russe.
        Il est en mission pour la première fois à bord de l'ISS depuis le 9 avril 2020
       </p>
           <a href="" className="Learnmore">Learn more ...</a>
      </section>
      
    </div>
  );
}

export default CrewCards;