import React, { Component } from "react";
import L from "leaflet";
import { Map, TileLayer, Marker } from "react-leaflet";
import Iss from "../assets/iss.png";
import axios from "axios";
import styled from "styled-components";
import ReactPlayer from "react-player";

const FondTitle1 = styled.div`
  position: relative;
  margin-top: 4vh;
  margin-bottom: 4vh;
`;

const FondImage = styled.img`
  width: 100vw;
`;

const Title = styled.h1`
  color: white;
  font-size: 2.5em;
  position: absolute;
  top: 2vh;
  left: 1.5vw;
`;

const Trait = styled.div`
  background-color: white;
  height: 1px;
  width: 50%;
  position: absolute;
  top: 8vh;
  z-index: 5;
`;

const FondTitle2 = styled.div`
  position: relative;
  margin-top: 4vh;
  margin-bottom: 4vh;
`;

const FondImage2 = styled.img`
  width: 100vw;
`;

const Title2 = styled.h1`
  color: white;
  font-size: 2.5em;
  position: absolute;
  top: 2vh;
  right: 1.5vw;
`;

const Trait2 = styled.div`
  background-color: white;
  height: 1px;
  width: 50%;
  position: absolute;
  top: 8vh;
  right: 0;
  z-index: 5;
`;

const VideoLive = styled.div`
  width: 50vw;
  margin-left: 29vw;

  margin-top: 4vh;
`;

const ImgContainerButton = styled.div`
  position: relative;
  text-align: center;
  color: white;
  flex-wrap: wrap;
  margin-top: 8vh;
  margin-bottom: 4vh;
`;

const ImgButton = styled.img`
  height: 40vh;
  width: 40vw;
  border: 1px solid grey;
  border-radius: 10px;
`;

const Centered = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: azure;
  font-size: 4em;
`;

const ISS_URL = "http://api.open-notify.org/iss-now.json";

class ViewISS extends Component {
  constructor(props) {
    super(props);
    //initialize a state name "SatIcon" with lat/lng (properties from leaflet)
    //initialize a user location at false (property from leaflet)
    this.state = {
      SatIcon: {
        lat: 0,
        lng: 0,
      },
      haveUsersLocation: false,
      zoom: 2,
    };
    //give icon function (from leaflet) to SatIcon in order to set some size ...
    this.SatIcon = L.icon({
      iconUrl: Iss,
      iconSize: [100, 100], // size of the icon
      iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
    });
  }
  //mount component by call recalIss function
  //add a callback function to update recalIss every 5s
  componentDidMount() {
    this.recalIss();
    this.interval = setInterval(this.recalIss, 2500);
  }
  //call API (stock in ISS-URL) by Axios
  //import json object from API with.then
  //update state of "issPosition" with data result from json object
  //update haveUsersLocation ?

  recalIss = () => {
    axios.get(ISS_URL).then(({ data }) => {
      this.setState({
        SatIcon: {
          lat: data.iss_position.latitude,
          lng: data.iss_position.longitude,
        },
        haveUsersLocation: true,
        zoom: 2,
      });
    });
  };

  render() {
    const positionSatIcon = [this.state.SatIcon.lat, this.state.SatIcon.lng];
    return (
      <div>
        <FondTitle1>
          <FondImage img src="/photos/stars2.jpg" alt="stars" />

          <Title>Iss Live Position </Title>
          <Trait></Trait>
        </FondTitle1>
        <Map
          style={{
            width: "70vw",
            height: "90vh",
            margin: "auto",
            position: "center",
          }}
          className="map"
          center={[0, 0]}
          zoom={2.4}
          maxZoom={3}
          minZoom={1.9}
        >
          <TileLayer
            attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          />
          {this.state.haveUsersLocation && (
            <Marker position={positionSatIcon} icon={this.SatIcon}></Marker>
          )}
        </Map>

        <VideoLive>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=EEIk7gwjgIM"
            controls
            playbackRate={2}
          />
        </VideoLive>

        <ImgContainerButton>
          <a href="#b" className="ChezVous" data-inf="photo">
            <ImgButton src="/photos/starObs.jpg" alt="logo" />
            <Centered>
              <p>Watch ISS</p>
              <p>from home </p>
            </Centered>
          </a>
        </ImgContainerButton>
        <FondTitle2>
          <FondImage2 img src="/photos/stars2.jpg" alt="stars" />

          <Title2>Crew on-board</Title2>
          <Trait2></Trait2>
        </FondTitle2>
      </div>
    );
  }
}

export default ViewISS;
