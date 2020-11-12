import React from 'react';
import styled from 'styled-components';

const Crewcards = styled.div 
   ` display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 35vw;
    height: auto;
    border-radius: 20px;
    margin: 100px 350px 100px 350px;
    padding: 10px 10px 10px 10px;
    border: solid 6px black;
    background-color: rgb(53, 52, 52);`

const Crewheader = styled.header 
    `display: flex;
    justify-content: center;
    position: relative;
    width: 35%;
    height: auto;
    border-radius: 20px;
    border: solid 2px white;`

const Astrophoto = styled.img
    ` width: 100%;
     height: 100%;
     border-radius: 20px;
     filter: saturate(1);
     &:hover {
         filter: grayscale(100);
     }`;

const Crewsection = styled.section
     `display: flex;
     flex-direction: column;
     width: 63%;
     height: auto;
     align-items: center;
         `

const Astrotitle = styled.div 
   `display: flex;
    flex-wrap: wrap;
     width: 95%;
    height: auto;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
    padding: 5px 5px 5px 5px;`

const Astroname = styled.h2
    `text-align: center;
    font-size: 16px;
    color: white;
    `;
const Astroflag = styled.img
    `width: 100px;
    height: 50px;`;

const Trait = styled.hr
    ` width: 100%;
     margin-top: 20px;
     border: solid 2px white;`

const P = styled.p 
   ` width: 100%;
    height: auto;
    text-align: justify;
    margin-top: 60px;
    margin-bottom: 20px;
    color: white;`

const Learnmore = styled.a
   ` width: 100%;
    text-align: end;
    margin-top: 10px;
    margin-bottom: 10px;
    color: white;
    &:hover  {
    color: blue;
    }`

const CrewCards = ({name, craft}) => (
      <Crewcards>
        <Crewheader>
          <Astrophoto src="./photos/IvanWagner.jpg"  alt="Ivan Wagner" />
        </Crewheader>
        <Crewsection>
          <Astrotitle>
            <Astroname>{name} in {craft}</Astroname>
            <Astroflag src="./photos/Russia.png" alt="drapeau" />
          </Astrotitle>
          <Trait></Trait>
          <P>Ivan Viktorovitch Vagner (en russe : Иван Викторович Вагнер), 
          né le 10 juillet 1985 à Severonejsk dans l'Oblast d'Arkhangelsk en Russie est un cosmonaute russe.
          Il est en mission pour la première fois à bord de l'ISS depuis le 9 avril 2020
         </P>
             <Learnmore href="https://fr.wikipedia.org/wiki/Ivan_Vagner">Learn more ...</Learnmore>
        </Crewsection> 
      </Crewcards>
    );

export default CrewCards;