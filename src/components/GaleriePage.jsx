import React, { Component } from "react";
import DisplayGalerie from "./DisplayGalerie.jsx";
import ChooseADate from "./ChooseADate.jsx";
import axios from "axios";
import styled from "styled-components";

const size = {
  xs: "550px",
  sm: "768px",
  lg: "1200px",
};

const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  lg: `(max-width: ${size.lg})`,
};

const Page = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
`;

const Title1 = styled.div`
  padding-top: 6vh;
  @media ${device.xs} {
    padding-bottom: 1vh;
    margin-top: 6vh;
  }
`;

const H1 = styled.h1`
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

const Trait = styled.div`
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

const FondTitre = styled.div`
  display: block;
  position: relative;
  margin-top: 5vh;
  margin-bottom: 5vh;
`;

const ImageFond1 = styled.img`
  margin-top: 0;
  margin-bottom: 0;
  width: 100vw;
  @media ${device.xs} {
    height: 7.5vh;
  }
`;

const Title2 = styled.div`
  padding-top: 2vh;
  margin-bottom: 4vh;
`;

const H2 = styled.h1`
  color: white;
  font-size: 2em;
  position: absolute;
  top: 2vh;
  right: 2vw;
  z-index: 4;
  font-family: Vindemia;
  @media ${device.xs} {
    font-size: 0.9em;
    text-align: center;
  }
`;

const Trait2 = styled.div`
  background-color: white;
  height: 1px;
  width: 60%;
  position: absolute;
  top: 7vh;
  right: 0;
  z-index: 5;
  @media ${device.xs} {
    width: 100%;
    top: 8vh;
  }
`;

const ImageFond2 = styled.img`
  margin-top: 0;
  margin-bottom: 0;
  width: 100vw;
  @media ${device.xs} {
    height: 7.5vh;
  }
`;

const FondTitre2 = styled.div`
  display: block;
  position: relative;
`;

class GaleriePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //On ne lui met pas d'image de base comme elle change tous les jours
      photo: {},
    };
    this.getGalerie = this.getGalerie.bind(this);
  }

  componentDidMount() {
    this.getGalerie();
    window.scrollTo(0, 0);
  }

  getGalerie() {
    const api_key = process.env.REACT_APP_API_KEY;
    // Récupération de l'API
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`)
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          photo: data,
        });
      });
  }

  render() {
    return (
      <Page>
        <Title1>
          <FondTitre>
            <ImageFond1 src="/photos/stars2.jpg" alt="stars" />
            <H1>NASA picture of the day</H1>
            <Trait></Trait>
          </FondTitre>
        </Title1>

        <div className="GaleriePage">
          {this.state.photo ? (
            <DisplayGalerie photo={this.state.photo} />
          ) : (
            <p>No data yet</p>
          )}
        </div>

        <Title2>
          <FondTitre2>
            <ImageFond2 src="/photos/stars2.jpg" alt="stars" />
            <H2>What did hubble see that day ?</H2>
            <Trait2></Trait2>
          </FondTitre2>
        </Title2>

        <ChooseADate />
      </Page>
    );
  }
}

export default GaleriePage;
