import React, { Component } from "react";
import L from "leaflet";
import { Map, TileLayer, Marker } from "react-leaflet";
import Iss from "../assets/iss.png";
import axios from "axios";
import ReactPlayer from "react-player";
import { toast } from "react-toastify";
import {
  FondTitle,
  FondImage,
  Title,
  Trait,
  Title2,
  Trait2,
  Trait3,
  Trait4,
  VideoLive,
  ImgContainerButton,
  ImgButton,
  Centered,
  Title4,
  DisplayMap,
} from "./ViewISSCSS";
import "leaflet/dist/leaflet.css";
import ISSMetrix from "./ISSMetrix";
import Carousel from "./CarouselMap";
import Astro from "./AstroList";
import PassageIss from "./PassageIss";

const ISS_URL = "http://api.open-notify.org/iss-now.json";

class ViewISS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SatIcon: {
        lat: 0,
        lng: 0,
      },
      haveUsersLocation: false,
    };

    this.SatIcon = L.icon({
      iconUrl: Iss,
      iconSize: [100, 100], // size of the icon
      iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
    });
  }

  componentDidMount() {
    this.recalIss();
    this.interval = setInterval(this.recalIss, 2500);
  }

  recalIss = () => {
    axios
      .get(ISS_URL)
      .then(({ data }) => {
        this.setState({
          SatIcon: {
            lat: data.iss_position.latitude,
            lng: data.iss_position.longitude,
          },
          haveUsersLocation: true,
        });
      })
      .catch(() => {
        toast("Something bad happened :(");
      });
  };

  render() {
    const positionSatIcon = [this.state.SatIcon.lat, this.state.SatIcon.lng];
    return (
      <div>
        <Carousel />
        <FondTitle>
          <FondImage img src="/photos/stars2.jpg" alt="stars" />
          <Title>Iss Live Position </Title>
        </FondTitle>
        <Trait></Trait>

        <DisplayMap>
          <Map
            className="map"
            center={[0, 0]}
            zoom={this.state.haveUsersLocation ? "2" : "1"}
            maxZoom={3}
            minZoom={1}
            style={{
              height: "50vh",
            }}
          >
            <TileLayer
              attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            />
            {this.state.haveUsersLocation && (
              <Marker position={positionSatIcon} icon={this.SatIcon}></Marker>
            )}
          </Map>
        </DisplayMap>
        <ISSMetrix />
        <FondTitle>
          <FondImage img src="/photos/stars2.jpg" alt="stars" />
          <Title2>ISS Video Live</Title2>
        </FondTitle>
        <Trait2></Trait2>

        <VideoLive>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=DDU-rZs-Ic4"
            controls
            playbackRate={2}
          />
        </VideoLive>

        <FondTitle>
          <FondImage img src="/photos/stars2.jpg" alt="stars" />
          <Title>Watch ISS from home</Title>
        </FondTitle>
        <Trait3></Trait3>

        <ImgContainerButton to="/passageiss">
          <a href="#b" className="ChezVous" data-inf="photo">
            <ImgButton src="/photos/starObs.jpg" alt="logo" />
            <Centered>
              <p>pass predicitions</p>
              <p>duration and weather</p>
            </Centered>
          </a>
        </ImgContainerButton>

        <FondTitle>
          <FondImage img src="/photos/stars2.jpg" alt="stars" />
          <Title4>Crew on-board</Title4>
        </FondTitle>
        <Trait4></Trait4>
        <Astro />
      </div>
    );
  }
}

export default ViewISS;
