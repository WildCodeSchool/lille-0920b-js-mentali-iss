import React, { Component } from "react";
import axios from "axios";

import L from "leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import Spinner from "./SpinnerPassage.jsx";
import {
  TitleForm,
  ImgHeadContainer,
  ImageSecondHeader,
  HeadTitle,
  ImgStarsContainer,
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
  DurationContainerB,
} from "./PassageIssStyle.jsx";
import leafRed from "../assets/leafRed.png";
import leafShadow from "../assets/leafShadow.png";

class PassageIss extends Component {
  constructor(props) {
    super(props);
    // UpDate state
    this.getLocation = this.getLocation.bind(this);
    this.handleChangeCity = this.handleChange.bind(this);
    this.handleSubmitCity = this.handleSubmit.bind(this);
    this.state = {
      // Default states
      UserLocationIcon: {
        lat: 0,
        lng: 0,
      },
      zoom: 1,
      haveUserLocation: false,
      City: [],
      ArrayCity: [],
      CityCheck: [],
      err: null,
      ErrorMessage: [],
      ErrorMessageGeolocation: [],
      ApiObjectLoading: false,
      ApiObject: [],
      Desgroupe: [],
      RiTiWiDuDesGroupe: [],
      RitiWithDurDesgroupe: [],
      weatherResp: [],
    };
    // Icon
    this.UserLocationIcon = L.icon({
      iconUrl: leafRed,
      shadowUrl: leafShadow,
      iconSize: [38, 95], // size of the icon
      shadowSize: [50, 64], // size of the shadow
      iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62], // the same for the shadow
      popupAnchor: [-3, -76], //popup icon position
    });
  }
  // Bind the input
  handleChange(event) {
    this.setState({ City: event.target.value });
  }
  handleSubmit(event) {
    this.getCityLocation({ City: event.target.value });
    event.preventDefault();
  }
  // Put user input into a geolocation api
  getCityLocation() {
    this.getCityLocation.bind(this);
    const CityInput = this.state.City;
    // limits the number of result
    const UrlCity = `https://nominatim.openstreetmap.org/search/${CityInput}?format=json&limit=1`;
    this.setState({ err: null });
    axios
      .get(UrlCity)
      .then((response) => {
        const ArrayCity = response.data[0];
        const CityCheck = ArrayCity.display_name;
        // update state
        this.setState({
          UserLocationIcon: { lat: ArrayCity.lat, lng: ArrayCity.lon },
          CityCheck,
          haveUserLocation: true,
          zoom: 7,
        });
        this.getPrediction({
          UserLocationIcon: {
            lat: ArrayCity.lat,
            lng: ArrayCity.lon,
          },
        });
      })
      // catch error
      .catch((err) => {
        this.setState({
          err,
          ErrorMessage: ["Please, enter a real location instead"],
        });
      });
  }
  // geolocation api
  getLocation() {
    this.setState({ err: null });
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          UserLocationIcon: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
          haveUserLocation: true,
          zoom: 7,
        });
        //update state
        this.getPrediction({
          UserLocationIcon: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
        });
        //pass results to reverse geolocation api
        this.CorrectCityName({
          UserLocationIcon: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
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
  }
  CorrectCityName() {
    this.CorrectCityName.bind(this);
    const LatCorrek = this.state.UserLocationIcon.lat;
    const LonCorrek = this.state.UserLocationIcon.lng;
    const UrlCorrekCity = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${LatCorrek}&lon=${LonCorrek}&zoom=10`;
    axios.get(UrlCorrekCity).then((response) => {
      const ArrayCity = response.data;
      const CityCheck = ArrayCity.display_name;
      //met à jours le nom de la ville afficher depuis les deux façons d'appeller les api de geolocation
      this.setState({
        CityCheck,
      });
    });
  }
  // passes results to getprediction lat an lng
  getPrediction() {
    this.getPrediction.bind(this);
    const latitude = this.state.UserLocationIcon.lat;
    const longitude = this.state.UserLocationIcon.lng;
    // Cors err mais https://code4developers.com/cors-anywhere/
    this.setState({
      apiPrediction: `https://cors-anywhere.herokuapp.com/http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`,
      headers: {
        Origin: `http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`,
      },
    });
    //Spinner while loading
    const url = this.state.apiPrediction;
    this.setState({ ApiObjectLoading: true }, () => {
      axios.get(url).then((res) => {
        const ApiObject = res.data.response;
        this.setState({
          ApiObject,
          ApiObjectLoading: false,
        });
        this.getConversion({ ApiObject });
      });
    });
  }
  getConversion() {
    this.getConversion.bind(this);
    // Cannot do any loop here so there many variables to transform the array
    const ToDateUn = this.state.ApiObject[0].risetime * 1000;
    const DateUn = new Date(ToDateUn);
    //use datejs, it's library integrated
    const LocalDateUn = DateUn.toLocaleDateString("en-GB");
    //Pour avoir l'heure
    const RiTiWiDuOne = DateUn.toLocaleTimeString("en-GB");
    const one =
      this.state.ApiObject[0].risetime * 1000 +
      this.state.ApiObject[0].duration * 1000;
    const RitiWithDurUnHeure = new Date(one);
    const DurUnHeure = RitiWithDurUnHeure.toLocaleTimeString("en-GB");

    const ToDateDeux = this.state.ApiObject[1].risetime * 1000;
    const DateDeux = new Date(ToDateDeux);
    const LocalDateDeux = DateDeux.toLocaleDateString("en-GB");
    const RiTiWiDuTwo = DateDeux.toLocaleTimeString("en-GB");
    const two =
      this.state.ApiObject[1].risetime * 1000 +
      this.state.ApiObject[1].duration * 1000;
    const RitiWithDurDeuxHeure = new Date(two);
    const DurDeuxHeure = RitiWithDurDeuxHeure.toLocaleTimeString("en-GB");

    const ToDateTrois = this.state.ApiObject[2].risetime * 1000;
    const DateTrois = new Date(ToDateTrois);
    const LocalDateTrois = DateTrois.toLocaleDateString("en-GB");
    const RiTiWiDuThree = DateTrois.toLocaleTimeString("en-GB");
    const three =
      this.state.ApiObject[2].risetime * 1000 +
      this.state.ApiObject[2].duration * 1000;
    const RitiWithDurTroisHeure = new Date(three);
    const DurTroisHeure = RitiWithDurTroisHeure.toLocaleTimeString("en-GB");

    const ToDateQuatre = this.state.ApiObject[3].risetime * 1000;
    const DateQuatre = new Date(ToDateQuatre);
    const LocalDateQuatre = DateQuatre.toLocaleDateString("en-GB");
    const RiTiWiDuFour = DateQuatre.toLocaleTimeString("en-GB");
    const four =
      this.state.ApiObject[3].risetime * 1000 +
      this.state.ApiObject[3].duration * 1000;
    const RitiWithDurQuatreHeure = new Date(four);
    const DurQuatreHeure = RitiWithDurQuatreHeure.toLocaleTimeString("en-GB");

    const ToDateCinq = this.state.ApiObject[4].risetime * 1000;
    const DateCinq = new Date(ToDateCinq);
    const LocationDateCinq = DateCinq.toLocaleDateString("en-GB");
    const RiTiWiDuFive = DateCinq.toLocaleTimeString("en-GB");
    const five =
      this.state.ApiObject[4].risetime * 1000 +
      this.state.ApiObject[4].duration * 1000;
    const RitiWithDurCinqHeure = new Date(five);
    const DurCinqHeure = RitiWithDurCinqHeure.toLocaleTimeString("en-GB");
    //Regroupe les résultats et les séparent dans un tableau
    const groupe = `${LocalDateUn}+${LocalDateDeux}+${LocalDateTrois}+${LocalDateQuatre}+${LocationDateCinq}`;
    const Desgroupe = groupe.split("+");
    const RiTiWiDuGroupe = `${RiTiWiDuOne}+${RiTiWiDuTwo}+${RiTiWiDuThree}+${RiTiWiDuFour}+${RiTiWiDuFive}`;
    const RiTiWiDuDesGroupe = RiTiWiDuGroupe.split("+");
    const RitiWithDurRegroupe = `${DurUnHeure}+${DurDeuxHeure}+${DurTroisHeure}+${DurQuatreHeure}+${DurCinqHeure}`;
    const RitiWithDurDesgroupe = RitiWithDurRegroupe.split("+");
    this.setState({ Desgroupe, RiTiWiDuDesGroupe, RitiWithDurDesgroupe });
    this.getWeather({ ToDateUn });
  }
  getWeather() {
    this.getWeather.bind(this);
    const latitude = this.state.UserLocationIcon.lat;
    const longitude = this.state.UserLocationIcon.lng;
    const Time = this.state.ApiObject[0].risetime;
    const API_KEY = process.env.REACT_APP_API_KEY;
    const UrlWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&dt=${Time}&exclude=minutely,current,daily&appid=${API_KEY}`;
    axios.get(UrlWeather).then((response) => {
      const weatherResp = response;
      this.setState({
        weatherResp,
      });
    });
  }
  render() {
    const {
      RiTiWiDuDesGroupe,
      CityCheck,
      Desgroupe,
      RitiWithDurDesgroupe,
    } = this.state;
    //Gather user gelocation
    const LocationIcon = [
      this.state.UserLocationIcon.lat,
      this.state.UserLocationIcon.lng,
    ];
    // gather the geolocation data so we can print it on the page
    const positionLatLon = [
      "Latitude   : ",
      this.state.UserLocationIcon.lat,
      <br />,
      "Lontitude : ",
      this.state.UserLocationIcon.lng,
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
          <TitleForm>Choose you spot !</TitleForm>
        </ImgStarsContainer>
        <div>
          <ContainerLocation>
            <UserInput style={{ marginTop: "3vh" }}>
              <LocalisationButton onClick={this.getLocation}>
                Locate me
              </LocalisationButton>
              <EnterCity onSubmit={this.handleSubmitCity}>
                <label style={{ color: "white", fontSize: "3vh" }}>
                  Or enter a city name here
                  <EnterACityName
                    type="text"
                    placeholder="Tananarive"
                    value={this.state.City}
                    onChange={this.handleChangeCity}
                    required
                  />
                </label>
                <SubmitCity type="submit" value="Envoyer" />
              </EnterCity>
              {this.state.err != null ? (
                <VotrePosition>
                  {this.state.ErrorMessageGeolocation}{" "}
                </VotrePosition>
              ) : (
                  <VotrePosition>{positionLatLon}</VotrePosition>
                )}
              {this.state.err != null ? (
                <CheckCity> {this.state.ErrorMessage} </CheckCity>
              ) : (
                  <CheckCity> {CityCheck} </CheckCity>
                )}
            </UserInput>
            <DisplayUserLocation>
              <Map
                className="map"
                center={LocationIcon}
                zoom={this.state.zoom}
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
          <ImgHowObs alt="Picture helping understand how to observe ISS" />
        </ImgStarsContainer>
        <ImgStarsContainer>
          <ImageStars alt="Dark sky full of stars" />
          <TitleForm>What's the next watching sesion ? </TitleForm>
        </ImgStarsContainer>
        <PredContainer>
          {this.state.ApiObjectLoading ? (
            <Spinner />
          ) : (
              <RisetimeContainer>
                {Desgroupe.map((RisetimeDate, i) => {
                  return (
                    <p
                      style={{
                        paddingLeft: "7vw",
                        paddingRight: "60vw",
                        backgroundColor: "#00266F",
                        paddingTop: "3vh",
                        marginTop: "5vh",
                        marginBottom: "8vh",

                        height: "5vh",
                      }}
                      key={i}
                    >
                      {RisetimeDate}{" "}
                    </p>
                  );
                })}
              </RisetimeContainer>
            )}
          {this.state.ApiObjectLoading ? (
            <Spinner />
          ) : (
              <DurationContainerDecalage>
                <DurationContainerA>
                  {RiTiWiDuDesGroupe.map((RiseTimeBegins, i) => {
                    return (
                      <p
                        key={i * 5 + 1}
                        style={{
                          backgroundColor: "black",
                          paddingTop: "3vh",
                          marginTop: "8vh",

                          height: "5vh",
                        }}
                      >
                        Watch Iss from {RiseTimeBegins}
                      </p>
                    );
                  })}
                </DurationContainerA>
                <DurationContainerB>
                  {RitiWithDurDesgroupe.map((RiseTimeEnds, i) => {
                    return (
                      <p
                        style={{
                          paddingTop: "3vh",
                          marginTop: "8vh",
                          height: "5vh",
                        }}
                        key={i * 6 + 1}
                      >
                        until {RiseTimeEnds}
                      </p>
                    );
                  })}
                </DurationContainerB>
              </DurationContainerDecalage>
            )}
        </PredContainer>
      </div>
    );
  }
}
export default PassageIss;
