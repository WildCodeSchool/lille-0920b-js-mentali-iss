import React, { Component } from "react";
import DisplayGalerie from "./DisplayGalerie.jsx";
import ChooseADate from "./ChooseADate.jsx";
import axios from "axios";
import styled from "styled-components";

const Page = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
`;

const Textcolor = styled.p`
  color: white;
`;

const Title1 = styled.div`
  padding-top: 6vh;
`;

const H1 = styled.h1`
  color: white;
  font-size: 2em;
  position: absolute;
  top: 2vh;
  left: 2vw;
  z-index: 4;
`;

const Trait = styled.div`
  background-color: white;
  height: 1px;
  width: 50%;
  position: absolute;
  top: 7vh;
  z-index: 5;
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
`;

const Trait2 = styled.div`
  background-color: white;
  height: 1px;
  width: 50%;
  position: absolute;
  top: 7vh;
  right: 0;
  z-index: 5;
`;

const ImageFond2 = styled.img`
  margin-top: 0;
  margin-bottom: 0;
  width: 100vw;
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
      photo: null,
    };
    this.getGalerie = this.getGalerie.bind(this);
  }

  componentDidMount() {
    this.getGalerie();
  }

  getGalerie() {
    // Récupération de l'API
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=VRrNYEwbHHhEqD0HTDYC28EHdYcGfbHmg6xbTS4n"
      )
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        this.setState({
          photo: data,
        });
      });
  }

  render() {
    return (
      <Page>
        <Textcolor>
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
        </Textcolor>
        <ChooseADate />
      </Page>
    );
  }
}

export default GaleriePage;
