import styled from "styled-components";
import React, { Component } from "react";

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

const Fond = styled.div`
  color: black;
  width: 100vw;
  height: 100vh;
  background-image: url("/photos/rover2.jpg");
  background-repeat: no-repeat;
`;

const Text = styled.h1`
  color: white;
  font-size: 4em;
  text-align: center;
  padding-top: 30vh;
  padding-left: 10vw;
  padding-right: 10vw;
  font-family: "Quantum";
  @media ${device.sm} {
    font-size: 2em;
  }
`;

export default class RoverPage extends Component {
  render() {
    return (
      <Fond>
        <Text>
          Sorry, this page is being created, it will be avaliable soon !{" "}
        </Text>
      </Fond>
    );
  }
}
