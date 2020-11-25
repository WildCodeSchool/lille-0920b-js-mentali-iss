import styled from "styled-components";
import imageFondPred from "../assets/imageFondPred.jpg";
import imageStarFond from "../assets/imageStarFond.jpg";
import ImageObs from "../assets/ImageObs.jpg";

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
`;
export const ImageSecondHeader = styled.div`
  background-image: url(${imageFondPred});
  width: 100vw;
  height: 70vh;
  background-repeat: no-repeat;
  @media ${device.xs} {
    width: cover;
    height: 100vh;
  }
`;
export const HeadTitle = styled.h1`
  margin-top: 0vh;
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
    font-size: 4vw;
    bottom: 35vh;
    right: 02vw;
    left: 02vw;
    font-size: 15vw;
  }
`;
export const ImgStarsContainer = styled.div`
  position: relative;
`;
export const ImageStars = styled.div`
 background-image: url(${imageStarFond});
  width: 97vw;
  height: 15vh;
  background-repeat: no-repeat;
`;

export const Trait = styled.div`
  background-color: white;
  height: 1px;
  width: 70%;
  position: absolute;
  top: 12vh;
  z-index: 5;
  @media ${device.xs} {
    width: 100%;
    top : 15vh;
  }
`;

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
    top : -12vh;
  }
`;

export const TitleFormUn = styled.h3`
  margin-top: 0vh;
  position: absolute;
  font-size: 3vw;
  bottom: 5vh;
  left: 0vw;
  color: white;
  width: 60vw;
  font-family: Vindemia;
  margin-left: 10vh;
  @media ${device.xs} {
    position: absolute;
    text-align: center;
    font-size: 8vw;
    right: 10vw;
    left: 10vw;
    bottom: 8vh;
    top: 5vh;
    width: 80vw;
    margin-left: 0vh;
  }` 
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
    height: 60vh;
    margin-left: 5vw;
    margin-right: 5vw;
  }
`;

export const LocalisationButton = styled.button`
  color: black;
  fontsize: 10vh;
  margin-left: 19vw;
  margin-right: 25vw;
  margin-top: 1vw;
  margin-bottom: 3vw;
  width: 12vw;
  height: 5vh;
  border-radius: 10px;
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
    margin-left: 15vw;
    margin-right: 15vw;
    margin-top: 1vw;
    margin-bottom: 5vw;
  }
`;
export const VotrePosition = styled.p`
  color: white;
  fontsize: 5vh;
  margin-left: 10vw;
  margin-right: 10vw;
  margin-top: 1vw;
  margin-bottom: 1vw;
  width: 30vw;
  font-family: Vindemia;
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
  fontsize: 5vh;
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
  }`
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
    display : none;
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
    top : 10vh;
  }
`;

export const ImageStarsDeux = styled.div`
 background-image: url(${imageStarFond});
  width: 97vw;
  height: 15vh;
  background-repeat: no-repeat;
  @media ${device.xs} {
    height: 0vh;
    display : none;
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
export const ImgHowObs = styled.div`
  background-image: url(${ImageObs});
  width: 60vw;
  height: 50vh;
  margin-left: 25vw;
  margin-right: 25vw;
  background-repeat: no-repeat;
  display: solid;
  @media ${device.xs} {
    display: none;
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

