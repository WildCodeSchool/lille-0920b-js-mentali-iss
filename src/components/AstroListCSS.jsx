import styled from "styled-components";
import { device } from "./Device";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
  column-gap: 2em;
  row-gap: 2em;
  margin-top: 0 auto;
  margin-left: 2em;
  margin-right: 2em;
  margin-bottom: 3vh;
  @media ${device.mobile} {
    grid-template-columns: none;
  }
`;
