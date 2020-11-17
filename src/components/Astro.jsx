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
 margin: 100px 350px 100px 350px;
 padding: 10px 10px 10px 10px;
 border: solid 6px black;
 background-color: rgb(53, 52, 52);
 @media ${device.xs} {
   width: 80vw ;
   margin: 10px;
   justify-content: center;
  }`

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
  }`

const Astrophoto = styled.img` 
  width: 100%;
  height: 100%;
  border-radius: 20px;
  filter: saturate(1);
  &:hover {
      filter: grayscale(100);
  }
  @media ${device.xs} {
    display: none;
  }`;

const Crewsection = styled.section`
  display: flex;
  flex-direction: column;
  width: 63%;
  height: auto;
  align-items: center;
      `

const Astrotitle = styled.div `
  display: flex;
 flex-wrap: wrap;
 font-family: "Vindemia";
  width: 95%;
 height: auto;
 justify-content: space-around;
 align-items: center;
 margin-top: 20px;
 padding: 5px 5px 5px 5px;
 @media ${device.xs} {
    font-size: 1.8em;

    }`;

const Astroname = styled.h2`
  text-align: center;
  font-family: "Vindemia";
  font-size: 0.7em;
 color: white;
 @media ${device.xs} {
   font-size: 0.4em;
   margin-bottom: 15px;
   }
 `;

const Astroflag = styled.img`
  width: 100px;
 height: 50px;`;

const Trait = styled.hr` 
  width: 100%;
  margin-top: 20px;
  border: solid 2px white;`

const P = styled.p ` 
  width: 100%;
 height: auto;
 text-align: justify;
 font-family: "Vindemia";
 line-height: 20px;
 font-size: 0.6em;
 margin-top: 60px;
 margin-bottom: 20px;
 color: white;
 @media ${device.xs} {
   font-size: 0.4em;
   line-height: 10px;
   margin-top: 20px;
   }`

const Learnmore = styled.a` 
  width: 100%;
 text-align: end;
 margin-top: 10px;
 margin-bottom: 10px;
 font-family: "Vindemia";
 font-size: 0.5em;
 color: white;
 &:hover  {
 color: blue;
 }`

export default function Astro ({index, name, image, flag, astroImage, description, wiki}) {
    return (
        <Crewcards>
        <Crewheader>
          <Astrophoto src={astroImage} alt={name} />
        </Crewheader>
        <Crewsection>
          <Astrotitle>
            <Astroname>{name}</Astroname>
            <Astroflag  src={flag} alt="drapeau" />
          </Astrotitle>
          <Trait></Trait>
          <P>{description}
         </P>
             <Learnmore href={wiki}>Learn more ...</Learnmore>
        </Crewsection> 
      </Crewcards> 
    )
}