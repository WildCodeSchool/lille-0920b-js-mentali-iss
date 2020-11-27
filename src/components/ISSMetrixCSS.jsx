import styled from "styled-components";
import { device } from "./Device";

export const MetrixContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: black;
  font-family: "Vindemia";
  font-size: 1em;
  margin-bottom: 2vh;
  margin-top: -8vh;
  @media ${device.mobile} {
    font-size: 0.6em;
  }
`;

export const Row1 = styled.div`
  color: white;
  display: flex;
  justify-content: space-around;
  margin-top: 2vh;
  margin-bottom: 2vh;
  @media ${device.mobile} {
    flex-direction: column;
    line-height: 2em;
    align-items: center;
  }
`;

export const Row2 = styled.div`
  color: white;
  display: flex;
  justify-content: space-around;
  margin-bottom: 2vh;
  @media ${device.mobile} {
    flex-direction: column;
    align-items: center;
    line-height: 2em;
  }
`;
