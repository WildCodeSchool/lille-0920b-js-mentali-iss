import React from 'react';
import styled from 'styled-components';

const size = {
    xs: '320px',
    sm: '768px',
    lg: '1200px',
   };
  
  const device = {
    xs: `(max-width: ${size.xs})`,
    sm: `(max-width: ${size.sm})`,
    lg: `(min-width: ${size.lg})`,
   };
  
const Crewcards = styled.div ` 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 35vw;
    height: auto;
    border-radius: 20px;
    margin: 10px 250px 10px 50px;
    padding: 10px 10px 10px 10px;
    border: solid 6px black;
    background-color: rgb(53, 52, 52);
    @media ${device.xs} {
        width: 150%;
        margin : 10px 10px 10px 10px;
        }`;

const Crewheader = styled.header `
    display: flex;
    justify-content: center;
    position: relative;
    width: 35%;
    height: auto;
    border-radius: 20px;
    border: solid 2px white;
    @media ${device.xs} {
        display: none;
        }`;

const Astrophoto = styled.img` 
width: 100%;
     height: 100%;
     border-radius: 20px;
     filter: saturate(1);
     &:hover {
         filter: grayscale(100);
     }
     @media ${device.xs} {
        display: none
        }`;

const Crewsection = styled.section`
    display: flex;
     flex-direction: column;
     width: 63%;
     height: auto;
     align-items: center;
     @media ${device.xs} {
       width: 100%;
        }`;

const Astrotitle = styled.div `
    display: flex;
    flex-wrap: wrap;
    width: 95%;
    height: auto;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
    padding: 5px 5px 5px 5px;
    @media ${device.xs} {
       flex-direction: column;
        }`;

const Astroname = styled.h2`
    text-align: center;
    font-size: 0.8em;
    font-family: "Vindemia";
    color: white;
    `;
const Astroflag = styled.img`
    width: 100px;
    height: 50px;
    @media ${device.xs} {
        width: 55px;
        height: 35px;
        margin-top: 25px;
        }`;

const Trait = styled.hr` 
    width: 100%;
     margin-top: 20px;
     border: solid 2px white;`

const P = styled.p ` 
    width: 100%;
    font-size: 0.7em;
    font-family: "Vindemia";
    height: auto;
    text-align: justify;
    margin-top: 60px;
    margin-bottom: 20px;
    color: white;
    @media ${device.xs} {
        display: none
        }`

const Learnmore = styled.a` 
    width: 100%;
    text-align: end;
    margin-top: 10px;
    margin-bottom: 10px;
    color: white;
    &:hover  {
    color: blue;
    }`

const CrewCards = ({name, flag, astroImage, description, wiki}) => (
    <div>
         <Crewcards>
        <Crewheader>
          <Astrophoto src={astroImage}  alt="Ivan Wagner" />
        </Crewheader>
        <Crewsection>
          <Astrotitle>
            <Astroname>{name}</Astroname>
            <Astroflag src={flag} alt="cook" />
          </Astrotitle>
          <Trait></Trait>
          <P>{description}
         </P>
             <Learnmore href={wiki}>Learn more ...</Learnmore>
        </Crewsection> 
      </Crewcards>
    </div>
     
    );

export default CrewCards;