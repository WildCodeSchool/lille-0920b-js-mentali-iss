import styled from "styled-components";
import { device } from "./Device";
import { Link } from "react-router-dom";

export const DisplayMap = styled.div`
  position: relative;
  margin-bottom: 10vh;
  margin-top: 8vh;
  margin-left: 19vw;
  margin-right: auto;
  @media ${device.mobile} {
    width: 50%;
    margin-top: 8vh;
  }
`;

export const FondTitle = styled.div`
  position: relative;
  width: 98%;
  display: flex;
  justify-content: center;
  @media ${device.mobile} {
    margin-bottom: 1.5em;
  }
`;

export const FondImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const Title = styled.h1`
  color: white;
  font-size: 2.5em;
  font-family: "Vindemia";
  width: 98%;
  text-align: left;
  margin-top: 1em;
  position: absolute;
  @media ${device.mobile} {
    font-size: 1em;
    width: 90%;
    margin-top: 0.3em;
  }
`;

export const Trait = styled.div`
  background-color: white;
  width: 50vw;
  height: 1px;
  margin-top: 1%;
  margin-bottom: 1%;
  @media ${device.mobile} {
    width: 90%;
    margin-bottom: 1.5em;
  }
`;

export const Title2 = styled.h1`
  color: white;
  font-size: 2.5em;
  font-family: "Vindemia";
  text-align: center;
  margin-top: 1em;
  margin-left: 1.9em;
  position: absolute;
  right: 2vw;
  @media ${device.mobile} {
    font-size: 1em;
    text-align: left;
    margin-top: 0.3em;
  }
`;

export const Trait2 = styled.div`
  background-color: white;
  width: 50vw;
  margin-left: 50vw;
  height: 1px;
  margin-top: 1%;
  margin-bottom: 1%;

  @media ${device.mobile} {
    width: 90%;
    margin-bottom: 1.5em;
  }
`;

export const VideoLive = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 4vh;
  margin-bottom: 4vh;
  @media ${device.mobile} {
    width: 70%;
    height: 50%;
    margin-left: 15vw;
    justify-content: center;
  }
`;

export const Trait3 = styled.div`
  background-color: white;
  width: 50vw;
  height: 1px;
  margin-top: 1%;
  margin-bottom: 1%;
  @media ${device.mobile} {
    width: 90%;
    margin-bottom: 1.5em;
  }
`;

export const ImgContainerButton = styled(Link)`
  position: relative;
  text-align: center;
  color: white;
  font-family: "Vindemia";
  font-size: 0.4em;
  flex-wrap: wrap;

  width: 100%;
`;

export const ImgButton = styled.img`
  height: 30vh;
  width: 30vw;
  border: 2px solid grey;
  border-radius: 10px;
  @media ${device.mobile} {
    width: 50%;
    height: 50%;
  }
`;

export const Centered = styled.div`
  position: absolute;
  bottom: 0vh;
  left: 50%;
  transform: translate(-50%, -50%);
  color: azure;
  font-size: 4em;
  @media ${device.mobile} {
    width: 70%;
    height: 70%;
    font-size: 1.2em;
    margin-top: 25px;
  }
`;

export const Title4 = styled.h1`
  color: white;
  font-size: 2.5em;
  font-family: "Vindemia";
  width: 98%;
  text-align: right;
  margin-top: 1em;
  margin-right: 1em;
  position: absolute;
  @media ${device.mobile} {
    font-size: 1em;
    text-align: left;
    width: 90%;
    margin-top: 0.3em;
  }
`;

export const Trait4 = styled.div`
  background-color: white;
  width: 70vw;
  height: 1px;
  margin-top: 1%;
  margin-bottom: 1%;
  margin-left: 50vw;
  @media ${device.mobile} {
    width: 90%;
    margin-bottom: 1.5em;
  }
`;
