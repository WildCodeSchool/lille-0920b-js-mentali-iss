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
    font-size: 20vw;
  }
`;
export const ImgStarsContainer = styled.div`
  position: relative;
`;
export const ImageStars = styled.div`
  border: 1px solid #000;
  background-image: url(${imageStarFond});
  width: 97vw;
  height: 15vh;
  background-repeat: no-repeat;
`;

export const TitleForm = styled.h3`
  margin-top: 0vh;
  position: absolute;
  font-size: 3vw;
  bottom: 5vh;
  left: -8vw;
  color: white;
  width: 70vw;
  font-family: Vindemia;
  @media ${device.xs} {
    position: absolute;
    text-align: center;
    font-size: 10vw;
    right: 10vw;
    left: 10vw;
    bottom: 5vh;
    top: 5vh;
    width: 80vw;
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
    height: 60vh;
    margin-left: 5vw;
    margin-right: 5vw;
  }
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
  @media ${device.xs} {
    width: 30vh;
    margin-left: -75vw;
    margin-right: 0vw;
    margin-top: 1vw;
    margin-bottom: 1vw;
  }
`;

export const EnterCity = styled.form`
  margin-top: 1vh;
  margin-left: 10vw;
  margin-right: 10vw;
  margin-bottom: 1vw;
  width: 30vw;
  @media ${device.xs} {
    width: 90vw;
    margin-left: 12w;
    margin-right: 15vw;
    margin-top: 1vw;
    margin-bottom: 1vw;
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
    margin-bottom: 1vw;
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
    margin-bottom: 1vw;
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
    margin-bottom: 1vw;
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
    margin-bottom: 1vw;
  }
`;

export const TitleHowObs = styled.h3`
  position: relative;
  font-size: 3vw;
  bottom: 11vh;
  width: 24vw;
  right: 5vw;
  left: 60vw;
  color: white;
  font-family: Vindemia;
  display: solid;
  @media ${device.xs} {
    position: relative;
    text-align: center;
    display: none;
    margin-top: -25vh;
    width: 75vw;
  }
`;

export const ImgHowObs = styled.div`
  background-image: url(${ImageObs});
  width: 50vw;
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
    margin-top: -25vh;
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
