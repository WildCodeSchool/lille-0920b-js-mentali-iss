import React, { Component } from "react";
import axios from "axios";

import L from "leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import Spinner from "./SpinnerPassage.jsx";
import {
  ImageStarsDeux,
  TraitTrois,
  TitleFormUn,
  TraitDeux,
  TitleForm,
  ImgHeadContainer,
  ImageSecondHeader,
  HeadTitle,
  Trait,
  ImgStarsContainer,
  ImgStarsContainerDeux,
  ImageStars,
  ContainerLocation,
  UserInput,
  DisplayUserLocation,
  TitleHowObs,
  PredContainer,
  LocalisationButton,
  EnterCity,
  EnterACityName,
  SubmitCity,
  VotrePosition,
  CheckCity,
  ImgHowObs,
  RisetimeContainer,
  DurationContainerDecalage,
  DurationContainerA,
} from "./PassageIssStyle.jsx";
import leafRed from "../assets/leafRed.png";
import leafShadow from "../assets/leafShadow.png";

class PassageIss extends Component {
  constructor(props) {
    super(props);
    this.getLocation = this.getLocation.bind(this);
    this.handleChangeCity = this.handleChange.bind(this);
    this.handleSubmitCity = this.handleSubmit.bind(this);
    this.state = {
      UserLocationIcon: {
        lat: 0,
        lng: 0,
      },
      haveUserLocation: false,
      City: [],
      cityName: [],
      err: null,
      ErrorMessage: [],
      ErrorMessageGeolocation: [],
      loading: false,
      previsions: [],
      weatherResp: [],
    };
    // Icon for the map
    this.UserLocationIcon = L.icon({
      iconUrl: leafRed,
      shadowUrl: leafShadow,
      iconSize: [38, 95], // size of the icon
      shadowSize: [50, 64], // size of the shadow
      iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62], // the same for the shadow
      popupAnchor: [-3, -76], // popup icon position
    });
  }
  handleChange(event) {
    this.setState({ City: event.target.value });
  }
  handleSubmit(event) {
    this.getCityLocation({ City: event.target.value });
    event.preventDefault();
  }
  // Put user input into a geolocation api
  getCityLocation = () => {
    this.getCityLocation.bind(this);
    const CityInput = this.state.City;
    // limits the number of result
    const UrlCity = `https://nominatim.openstreetmap.org/search/${CityInput}?format=json&limit=1`; // We want at most 1 result
    this.setState({ err: null });
    axios
      .get(UrlCity)
      .then(({ data }) => {
        const city = data[0];
        const cityName = city.display_name;
        this.setState({
          UserLocationIcon: { lat: city.lat, lng: city.lon },
          cityName: cityName,
          haveUserLocation: true,
        });
        this.getPrediction({
          UserLocationIcon: {
            lat: city.lat,
            lng: city.lon,
          },
        });
      })
      .catch((err) => {
        this.setState({
          err,
          ErrorMessage: ["Please, enter a real location instead"],
        });
      });
  };

  getLocation = () => {
    this.setState({ err: null });
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        this.setState({
          UserLocationIcon: {
            lat: latitude,
            lng: longitude,
          },
          haveUserLocation: true,
        });
        this.getPrediction({
          UserLocationIcon: {
            lat: latitude,
            lng: longitude,
          },
        });
        //pass results to reverse geolocation api
        this.CorrectCityName({
          UserLocationIcon: {
            lat: latitude,
            lng: longitude,
          },
        });
      },
      //err if navigator does not allow geolocation
      (err) =>
        this.setState({
          err,
          ErrorMessageGeolocation: [
            "You didn't allow your navigator to get your location!",
          ],
        })
    );
    this.CorrectCityName();
  };
  CorrectCityName = () => {
    this.CorrectCityName.bind(this);
    const { lat, lng } = this.state.UserLocationIcon;
    const reverseGeolocUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=10`;
    axios.get(reverseGeolocUrl).then(({ data }) => {
      const city = data;
      const cityName = city.display_name;
      this.setState({
        cityName: cityName,
      });
    });
  };
  // passes results to getprediction lat an lng
  getPrediction = () => {
    const { lat, lng } = this.state.UserLocationIcon;
    this.getPrediction.bind(this);
    this.setState(
      {
        loading: true,
      },
      () => {
        // Blocked by CORS, but followed https://code4developers.com/cors-anywhere/
        const url = `https://cors-anywhere.herokuapp.com/http://api.open-notify.org/iss-pass.json?lat=${lat}&lon=${lng}`;
        axios.get(url).then(({ data }) => {
          this.getConversion(data.response);
        });
      }
    );
  };
  getConversion = (previsions) => {
    const cleanPrevs = previsions.map((prevision) => {
      const rise = new Date(prevision.risetime * 1000);
      const riseDate = rise.toLocaleDateString("en-GB");
      const riseTime = rise.toLocaleTimeString("en-GB");
      const down = new Date(
        prevision.risetime * 1000 + prevision.duration * 1000
      );
      const downTime = down.toLocaleTimeString("en-GB");

      return {
        riseDate,
        riseTime,
        downTime,
      };
    });

    this.setState({
      previsions: cleanPrevs,
      loading: false,
    });

    //this.getWeather({ ToDateUn });
  };
  getWeather = () => {
    this.getWeather.bind(this);
    const latitude = this.state.UserLocationIcon.lat;
    const longitude = this.state.UserLocationIcon.lng;
    const Time = this.state.previsions[0].riseTime;
    const API_KEY = process.env.REACT_APP_API_KEY;
    const UrlWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&dt=${Time}&exclude=minutely,current,daily&appid=${API_KEY}`;
    axios.get(UrlWeather).then((response) => {
      const weatherResp = response;
      this.setState({
        weatherResp,
      });
    });
  };
  render() {
    const { cityName, previsions } = this.state;
    //Gather user gelocation
    const LocationIcon = [
      this.state.UserLocationIcon.lat,
      this.state.UserLocationIcon.lng,
    ];
    // gather the geolocation data so we can print it on the page
    const positionLatLon = [
      "Latitude   : ",
      LocationIcon[0],
      <br />,
      "Longitude : ",
      LocationIcon[1],
    ];
    return (
      <div
        style={{ backgroundColor: "black", width: "cover", height: "cover" }}
      >
        <ImgHeadContainer>
          <ImageSecondHeader alt="Beautifool evening picture" />
          <HeadTitle>Watch ISS from Home</HeadTitle>
        </ImgHeadContainer>
        <ImgStarsContainer>
          <ImageStars alt="Dark sky full of stars" />
          <TitleFormUn>Choose you spot !</TitleFormUn>
          <Trait></Trait>
        </ImgStarsContainer>
        <div>
          <ContainerLocation>
            <UserInput style={{ marginTop: "3vh" }}>
              <LocalisationButton onClick={this.getLocation}>
                Locate me
              </LocalisationButton>
              <EnterCity onSubmit={this.handleSubmitCity}>
                <label style={{ color: "white", fontSize: "3vh", marginBottom: '3vh' }}>
                  Or enter a city name here
                  <EnterACityName
                    type="text"
                    placeholder="Tananarive"
                    value={this.state.City}
                    onChange={this.handleChangeCity}
                    required
                  />
                </label>
                <SubmitCity type="submit" value="Send" />
              </EnterCity>
              {this.state.err != null ? (
                <VotrePosition>
                  {this.state.ErrorMessageGeolocation}
                </VotrePosition>
              ) : (
                <VotrePosition>{positionLatLon}</VotrePosition>
              )}
              {this.state.err != null ? (
                <CheckCity> {this.state.ErrorMessage} </CheckCity>
              ) : (
                <CheckCity> {cityName} </CheckCity>
              )}
            </UserInput>
            <DisplayUserLocation>
              <Map
                className="map"
                center={LocationIcon}
                zoom={this.state.haveUserLocation ? "7" : "1"}
                style={{
                  height: "50vh",
                  width: "auto",
                  borderRadius: "auto",
                }}
              >
                <TileLayer
                  attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
                  url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                />
                {this.state.haveUserLocation && (
                  <Marker position={LocationIcon} icon={this.UserLocationIcon}>
                    <Popup>You are rooted here ! </Popup>
                  </Marker>
                )}
              </Map>
            </DisplayUserLocation>
          </ContainerLocation>
        </div>
        <ImgStarsContainer>
          <ImageStars alt="Dark sky full of stars" />
          <TitleHowObs>How to observe it ? </TitleHowObs>
          <TraitDeux></TraitDeux>
          <ImgHowObs alt="Picture helping understand how to observe ISS" />
        </ImgStarsContainer>
        <ImgStarsContainerDeux>
          <ImageStarsDeux alt="Dark sky full of stars" />
          <TitleForm >
            What's the next watching session ?{" "}
          </TitleForm>
          <TraitTrois></TraitTrois>
        </ImgStarsContainerDeux>
        <PredContainer>
          {this.state.loading ? (
            <Spinner />
          ) : (
            <RisetimeContainer>
              {previsions.map((prevision, i) => {
                return (
                  <p
                    style={{
                      paddingRight: "7vw",
                      backgroundColor: "#00266F",
                      paddingTop: "3vh",
                      marginTop: "5vh",
                      marginBottom: "8vh",
                      height: "5vh",
                    }}
                    key={i}
                  >
                    Watch the ISS on {prevision.riseDate}
                  </p>
                );
              })}
            </RisetimeContainer>
          )}
          {this.state.loading ? (
            <Spinner />
          ) : (
            <DurationContainerDecalage>
              <DurationContainerA>
                {previsions.map((prevision, y) => {
                  return (
                    <p
                      style={{
                        paddingTop: "3vh",
                        marginTop: "8vh",
                        height: "5vh",
                      }}
                      key={y}
                    >
                      from {prevision.riseTime} to {prevision.downTime}
                    </p>
                  );
                })}
              </DurationContainerA>
            </DurationContainerDecalage>
          )}
        </PredContainer>
      </div>
    );
  }
}
export default PassageIss;
