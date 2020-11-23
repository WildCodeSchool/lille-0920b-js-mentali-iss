import styled from "styled-components";
import imageFondPred from '../assets/imageFondPred.jpg';
import imageStarFond from '../assets/imageStarFond.jpg';
import ImageObs from '../assets/ImageObs.jpg';

export const ImgHeadContainer = styled.div`
  position: relative;
`;
export const ImageSecondHeader = styled.div`
  background-image: url(${imageFondPred});
  width: 100vw;
  height: 70vh;
  background-repeat: no-repeat;
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
`;
export const ImgStarsContainer = styled.div`
  position: relative;
`;
export const ImageStars = styled.div`
  border: 1px solid #000;
  background-image: url(${imageStarFond});
  width: 100vw;
  height: 15vh;
  background-repeat: no-repeat;
`;

export const TitleForm = styled.h3`
  margin-top: 0vh;
  position: absolute;
  font-size: 3vw;
  bottom: 5vh;
  right: 48vw;
  left: 5vw;
  color: white;
  width : 70vw;
  font-family: Vindemia;
`;

export const ContainerLocation = styled.div`
  position: relative;
  margin-left: 5vw;
  margin-right: 5vw;
  display: grid;
  grid-template-columns: auto auto;
`;

export const UserInput = styled.div`
  position: relative;
  margin-bottom: 4vh;
  width: 45vh;
`;

export const DisplayUserLocation = styled.div`
  position: relative;
  margin-bottom: 4vh;
  margin-top: 4vh;
  width: 60vh;
`;

export const LocalisationButton = styled.button`
  color: black;
  fontsize: 10vh;
  margin-left: 15vw;
  margin-right: 15vw;
  margin-top: 1vw;
  margin-bottom: 1vw;
  width: 12vw;
  height: 5vh;
  border-radius: 10px;
`;

export const EnterCity = styled.form`
  margin-top: 1vh;
  margin-left: 10vw;
  margin-right: 10vw;
  margin-bottom: 1vw;
  width: 30vw;
`;
export const EnterACityName = styled.input`
  height: 4vh;
  width: 25vw;
`;

export const SubmitCity = styled.input`
  height: 4vh;
  width: 7vw;
  margin-top: 2vh;
  margin-left: 19vw;
  border-radius: 7px;
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
`;

export const TitleHowObs = styled.h3`
  position: relative;
  font-size: 3vw;
  bottom: 11vh;
  width: 90vw;
  right: 5vw;
  left: 65vw;
  color: white;
  font-family: Vindemia;
`;
export const ImgHowObs = styled.div`
  background-image: url(${ImageObs});
  width: 50vw;
  height: 50vh;
  margin-left: 25vw;
  margin-right: 25vw;
  background-repeat: no-repeat;
`;

export const PredContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  margin-left: 10vw;
`;
export const RisetimeContainer = styled.div`
  position: relative;
  width: 30vh;
  margin-left: 11vw;
  color: white;
  font-size: 3vh;
  font-family: Verdana;
`;
export const DurationContainerDecalage = styled.div`
  position: relative;
  margin-top: 5vh;
  margin-left: 40vw;
  font-size: 3vh;
`;
export const DurationContainerA = styled.div`
  position: relative;
  width: 40vh;
  color: white;
  right : 54.3vw;
  font-family: Verdana;
`;
export const DurationContainerB = styled.div`
  position: absolute;
  color: white;
  bottom: 0vh;
  width: 40vw;
  left: -20vw;
  color: white;
  font-family: Verdana;
`;