import styled from "styled-components";
import imageStarFond from "../assets/imageStarFond.jpg";

const size = {
  xs: "320px",
  sm: "768px",
  lg: "1200px",
};

const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  lg: `(max-width: ${size.lg})`,
};

export const ImgHeadContainer = styled.div`
  position: relative;
  @media ${device.xs} {
    margin-top: 12vh;
  }
`;

export const ImageSecondHeader = styled.img`
  width: 100vw;
  height: auto;
  @media ${device.xs} {
    width: cover;
    height: auto;
  }
`;
export const HeadTitle = styled.h1`
  position: absolute;
  text-align: center;
  font-size: 4vw;
  bottom: 35vh;
  right: 22vw;
  left: 22vw;
  color: white;
  font-family: Vindemia;
  @media ${device.xs} {
    position: absolute;
    text-align: center;
    font-size: 1.5em;
    top: 10vh;
    right: 4vw;
    left: 4vw;
  }
`;

// Choose your spot

export const Title1 = styled.div`
  padding-top: 6vh;
  @media ${device.xs} {
    padding-top: 0;
  }
`;

export const ImgStarsContainer1 = styled.div`
  display: block;
  position: relative;
  margin-top: 5vh;
  margin-bottom: 5vh;
`;
export const ImageStars1 = styled.img`
  margin-top: 0;
  margin-bottom: 0;
  width: 100vw;
  @media ${device.xs} {
    height: 6vh;
  }
`;

export const TitleFormUn = styled.h3`
  color: white;
  font-size: 2em;
  position: absolute;
  top: 2vh;
  left: 2vw;
  z-index: 4;
  font-family: Vindemia;
  @media ${device.xs} {
    font-size: 0.9em;
    margin-left: 14vw;
  }
`;

export const Trait1 = styled.div`
  background-color: white;
  height: 1px;
  width: 50%;
  position: absolute;
  top: 7vh;
  z-index: 5;
  @media ${device.xs} {
    width: 100%;
  }
`;

// How to observe it ?

export const Title2 = styled.div`
  padding-top: 6vh;
  @media ${device.xs} {
    padding-bottom: 1vh;
    padding-top: 0;
  }
`;

export const ImgStarsContainer2 = styled.div`
  display: block;
  position: relative;
  margin-top: 5vh;
  margin-bottom: 5vh;
`;
export const ImageStars2 = styled.img`
  margin-top: 0;
  margin-bottom: 0;
  width: 100vw;
  @media ${device.xs} {
    height: 7.5vh;
  }
`;

export const TitleFormDeux = styled.h3`
  color: white;
  font-size: 2em;
  position: absolute;
  top: 2vh;
  right: 2vw;
  z-index: 4;
  font-family: Vindemia;
  @media ${device.xs} {
    font-size: 0.9em;
    margin-right: 10vw;
  }
`;

export const Trait2 = styled.div`
  background-color: white;
  height: 1px;
  width: 50%;
  position: absolute;
  top: 7vh;
  right: 0;
  z-index: 5;
  @media ${device.xs} {
    width: 100%;
  }
`;

// What's the next watching session ?

export const Title3 = styled.div`
  padding-top: 6vh;
  @media ${device.xs} {
    padding-bottom: 1vh;
    padding-top: 0;
  }
`;

export const ImgStarsContainer3 = styled.div`
  display: block;
  position: relative;
  margin-top: 5vh;
  margin-bottom: 5vh;
`;
export const ImageStars3 = styled.img`
  margin-top: 0;
  margin-bottom: 0;
  width: 100vw;
  @media ${device.xs} {
    height: 7.5vh;
  }
`;

export const TitleFormTrois = styled.h3`
  color: white;
  font-size: 2em;
  position: absolute;
  top: 2vh;
  left: 2vw;
  z-index: 4;
  font-family: Vindemia;
  @media ${device.xs} {
    font-size: 0.9em;
    text-align: center;
  }
`;

export const Trait3 = styled.div`
  background-color: white;
  height: 1px;
  width: 70%;
  position: absolute;
  top: 7vh;
  z-index: 5;
  @media ${device.xs} {
    width: 100%;
  }
`;

// Reste du CSS

export const TitleForm = styled.h3`
  margin-top: 0vh;
  position: absolute;
  font-size: 1.9vw;
  bottom: 5vh;
  left: 0vw;
  color: white;
  width: 80vw;
  font-family: Vindemia;
  @media ${device.xs} {
    position: absolute;
    text-align: center;
    font-size: 5vw;
    right: 5vw;
    left: 5vw;
    bottom: 8vh;
    width: 90vw;
    top: -12vh;
  }
`;

export const ContainerLocation = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto auto;
  @media ${device.xs} {
    grid-template-columns: none;
    grid-template-rows: auto auto;
  }
`;

export const UserInput = styled.div`
  position: relative;
  margin-bottom: 4vh;
  width: 45vh;
  @media ${device.xs} {
    width: 100vh;
  }
`;
export const DisplayUserLocation = styled.div`
  position: relative;
  margin-bottom: 4vh;
  margin-top: 4vh;
  width: 60vh;
  @media ${device.xs} {
    width: 90vw;
    height: 45vh;
    margin-left: 5vw;
    margin-right: 5vw;
  }
`;

export const LocalisationButton = styled.button`
  color: black;
  font-size: 1em;
  margin-left: 19vw;
  margin-right: 25vw;
  margin-top: 1vw;
  margin-bottom: 3vw;
  width: 12vw;
  height: 5vh;
  border-radius: 10px;
  transition: 0.2s;
  &:hover {
    color: white;
  }
  @media ${device.xs} {
    width: 30vh;
    margin-left: -75vw;
    margin-right: 0vw;
    margin-top: 1vw;
    margin-bottom: 5vw;
  }
`;

export const EnterCity = styled.form`
  margin-top: 1vh;
  margin-left: 10vw;
  margin-right: 10vw;
  margin-bottom: 3vw;
  width: 30vw;
  @media ${device.xs} {
    width: 90vw;
    margin-left: 12w;
    margin-right: 15vw;
    margin-top: 1vw;
    margin-bottom: 5vw;
  }
`;
export const EnterACityName = styled.input`
  height: 4vh;
  width: 25vw;
  @media ${device.xs} {
    width: 90vw;
    margin-left: -7vw;
    margin-right: 3vw;
    margin-top: 1vw;
    margin-bottom: 5vw;
  }
`;

export const SubmitCity = styled.input`
  height: 4vh;
  width: 7vw;
  margin-top: 2vh;
  margin-left: 19vw;
  border-radius: 7px;
  @media ${device.xs} {
    width: 30vw;
    margin-right: 30vw;
    margin-top: 1vw;
    margin-bottom: 5vw;
  }
`;
export const VotrePosition = styled.p`
  color: white;
  font-size: 1.2em;
  margin-left: 10vw;
  margin-right: 10vw;
  margin-top: 1vw;
  margin-bottom: 1vw;
  width: 30vw;
  font-family: Verdana;
  @media ${device.xs} {
    width: 90vw;
    margin-left: 5vw;
    margin-right: 5vw;
    margin-top: 1vw;
    margin-bottom: 5vw;
  }
`;
export const CheckCity = styled.p`
  color: white;
  font-size: 1.2em;
  margin-left: 10vw;
  margin-right: 10vw;
  margin-top: 1vw;
  margin-bottom: 1vw;
  width: 30vw;
  font-family: Verdana;
  @media ${device.xs} {
    width: 90vw;
    margin-left: 5vw;
    margin-right: 5vw;
    margin-top: 1vw;
    margin-bottom: 5vw;
  }
`;
export const ImgStarsContainerDeux = styled.div`
  position: relative;
  @media ${device.xs} {
    margin-top: 0vh;
  }
`;
export const TitleHowObs = styled.h3`
  position: relative;
  font-size: 3vw;
  bottom: 11vh;
  width: 50vw;
  right: 5vw;
  left: 40vw;
  color: white;
  font-family: Vindemia;
  display: solid;
  @media ${device.xs} {
    display: none;
  }
`;
export const TraitDeux = styled.div`
  background-color: white;
  height: 1px;
  width: 70%;
  right: 0;
  position: absolute;
  top: 12vh;
  z-index: 5;
  @media ${device.xs} {
    width: 100%;
    top: 10vh;
  }
`;

export const ImageStarsDeux = styled.div`
  background-image: url(${imageStarFond});
  width: 97vw;
  height: 15vh;
  background-repeat: no-repeat;
  @media ${device.xs} {
    height: 0vh;
    display: none;
  }
`;

export const TraitTrois = styled.div`
  background-color: white;
  height: 1px;
  width: 70%;
  left: 0;
  position: absolute;
  top: 12vh;
  z-index: 5;
  @media ${device.xs} {
    width: 0%;
  }
`;

export const ImgHowObs = styled.img`
  width: 40vw;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  display: solid;
  @media ${device.xs} {
    width: 80vw;
    height: auto;
  }
`;

export const PredContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  margin-left: 10vw;
  @media ${device.xs} {
    margin-left: 0vw;
  }
`;
export const RisetimeContainer = styled.div`
  position: relative;
  width: 100vh;
  margin-left: 11vw;
  color: white;
  font-size: 3vh;
  font-family: Verdana;
  @media ${device.xs} {
    margin-left: 0vw;
    width: 100vw;
  }
`;
export const DurationContainerDecalage = styled.div`
  position: relative;
  margin-top: 5vh;
  font-size: 3vh;
  @media ${device.xs} {
    margin-left: 0vw;
    font-size: 15px;
  }
`;
export const DurationContainerA = styled.div`
  position: relative;
  color: white;
  margin-left: -70vw;
  font-family: Verdana;
  @media ${device.xs} {
    width: 70vw;
  }
`;
