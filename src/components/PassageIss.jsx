import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import 'dayjs/locale/fr';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import Spinner from './SpinnerPassage.jsx';

import leafRed from '../assets/leafRed.png';
import leafShadow from '../assets/leafShadow.png';
import imageFondPred from '../assets/imageFondPred.jpg';
import imageStarFond from '../assets/imageStarFond.jpg';
import ImageObs from '../assets/ImageObs.jpg';

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
      zoom: 1,
      haveUserLocation: false,
      ApiObjectLoading: false,
      ApiObject: [],
      City: [],
      ArrayCity: [],
      CityCheck: [],
      Desgroupe: [],
      err: null,
      ErrorMessage:[],
      ErrorMessageGeolocation:[],
    };
    this.UserLocationIcon = L.icon({
      iconUrl: leafRed,
      shadowUrl: leafShadow,
      iconSize: [38, 95], // size of the icon
      shadowSize: [50, 64], // size of the shadow
      iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62], // the same for the shadow
      popupAnchor: [-3, -76],
    });
  }

  handleChange(event) {
    this.setState({ City: event.target.value });
  }

  handleSubmit(event) {
    this.getCityLocation({ City: event.target.value });
    event.preventDefault();
  }

  getCityLocation() {
    this.getCityLocation.bind(this);
    
    const CityInput = this.state.City;
    const UrlCity = `https://nominatim.openstreetmap.org/search/${CityInput}?format=json&limit=1`;
 // Now, To pull data from API use axios get method
 this.setState({err:null})
 axios.get(UrlCity)
 // axios automatically changes the response to JSON
 
 .then(response => {
  const ArrayCity = response.data[0];
      
  const CityCheck = ArrayCity.display_name;
     this.setState({
      UserLocationIcon: { lat: ArrayCity.lat, lng: ArrayCity.lon },
      CityCheck,
      haveUserLocation: true,
      zoom: 7,
     })
 })
 .catch(err => {
  console.log('whooo fait pas ch***')
  this.setState({
      err,
      ErrorMessage : ["C'est pas correk, ça n'a bon sens!"],
     })
     this.getPrediction();
 });
   // axios.get(UrlCity).then((response) => {const ArrayCity = response.data[0];const CityCheck = ArrayCity.display_name;
     // this.setState({UserLocationIcon: { lat: ArrayCity.lat, lng: ArrayCity.lon },CityCheck,haveUserLocation: true,zoom: 7,});
       // });
    
  }

  getLocation() {
    this.setState({err:null})
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
        this.getPrediction({
          UserLocationIcon: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
        });
        
      },
     (err) => 
          this.setState({
            err,
            ErrorMessageGeolocation : ["You didn't allow your navigator to get your location!"],
           }) 
    );
  }

    getPrediction() {
    this.getPrediction.bind(this);
    const latitude = this.state.UserLocationIcon.lat;
    const longitude = this.state.UserLocationIcon.lng;
    this.setState({
      apiPrediction: `https://cors-anywhere.herokuapp.com/http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`,
      headers: {
        Origin: `http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`,
      },
    });
    const url = this.state.apiPrediction;
    this.setState({ ApiObjectLoading: true }, () => {
      axios.get(url).then((res) => {
        const ApiObject = res.data.response;
        console.log(ApiObject);

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

    const uno = this.state.ApiObject[0].risetime * 1000;
    const ein = new Date(uno);
    const un = ein.toLocaleString('en-US');
    console.log(un);
    const dos = this.state.ApiObject[1].risetime * 1000;
    const zwei = new Date(dos);
    const deux = zwei.toLocaleString('en-US');
    console.log(deux);

    const tres = this.state.ApiObject[2].risetime * 1000;
    const drei = new Date(tres);
    const trois = drei.toLocaleString('en-US');
    console.log(trois);

    const quatro = this.state.ApiObject[3].risetime * 1000;
    const vier = new Date(quatro);
    const quattre = vier.toLocaleString('en-US');
    console.log(quattre);

    const cinco = this.state.ApiObject[4].risetime * 1000;
    const funf = new Date(cinco);
    const cinq = funf.toLocaleString('en-US');
    console.log(cinq);
    const groupe = `${un}+${deux}+${trois}+${quattre}+${cinq}`;
    const Desgroupe = groupe.split('+');
    console.log(Desgroupe);

    this.setState({ Desgroupe });
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    const { ApiObject, CityCheck, Desgroupe } = this.state;
    const LocationIcon = [
      this.state.UserLocationIcon.lat,
      this.state.UserLocationIcon.lng,
    ];
    const positionLatLon = ["Latitude   : ",this.state.UserLocationIcon.lat, <br />,"Lontitude : ", this.state.UserLocationIcon.lng];
    return (
      <div>
        <ImgHeadContainer>
          <ImageSecondHeader alt="Beautifool evening picture" />
          <HeadTitle>De chez vous observez l'ISS</HeadTitle>
        </ImgHeadContainer>

        <ImgStarsContainer>
          <ImageStars alt="Dark sky full of stars" />
          <TitleForm>Selectionnez votre spot d'observation !</TitleForm>
        </ImgStarsContainer>

        <div>
          <ContainerLocation>
            <UserInput style={{ marginTop: '3vh' }}>
              <LocalisationButton onClick={this.getLocation}>
                Localize Me
              </LocalisationButton>
              <EnterCity onSubmit={this.handleSubmitCity}>
                <label style={{ color: 'white', fontSize: '3vh' }}>
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
              { this.state.err != null ? (  <VotrePosition>{this.state.ErrorMessageGeolocation} </VotrePosition>
                ) : (
                 <VotrePosition>
               {positionLatLon}
              </VotrePosition> )}

              { this.state.err != null ? (<CheckCity> {this.state.ErrorMessage} </CheckCity>) : (
              <CheckCity> {CityCheck} {' '} </CheckCity> )}
              
            </UserInput>
            <DisplayUserLocation>
              <Map
                className="map"
                center={LocationIcon}
                zoom={this.state.zoom}
                style={{
                  height: '50vh',
                  width: '35vw',
                  borderRadius: '10px',
                }}
              >
                <TileLayer
                  attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
                  url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                />
                {this.state.haveUserLocation && (
                  <Marker position={LocationIcon} icon={this.UserLocationIcon}>
                    <Popup>You are rooted here !</Popup>
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
          <TitleForm>Prochaine observation possibles</TitleForm>
        </ImgStarsContainer>
        <PredContainer>
          {this.state.ApiObjectLoading ? (
            <Spinner />
          ) : (
            <RisetimeContainer>
              {Desgroupe.map((tem) => {
                return (
                  <p
                    style={{
                      paddingLeft: '7vw',
                      backgroundColor: 'darkblue',
                      paddingTop: '3vh',
                      marginTop: '5vh',
                      marginBottom: '8vh',
                      width: '70vw',
                      height: '5vh',
                    }}
                    key={tem}
                  >
                    {tem}
{' '}
                  </p>
                );
              })}
            </RisetimeContainer>
          )}
          {this.state.ApiObjectLoading ? (
            <Spinner />
          ) : (
            <DurationContainerDecalage>
              <DurationContainer>
                {ApiObject.map((result) => {
                  return (
                    <p
                      key={result.duration}
                      style={{
                        backgroundColor: 'black',
                        paddingTop: '3vh',
                        marginTop: '8vh',
                        width: '30vw',
                        height: '5vh',
                      }}
                    >
                      Visible pendant {Math.floor(result.duration / 60)}
                      m'
                      {Math.round(result.duration % 60)}
                      s'
                    </p>
                  );
                })}
              </DurationContainer>
            </DurationContainerDecalage>
          )}
        </PredContainer>
        <p>Bas de la page</p>
      </div>
    );
  }
}
export default PassageIss;

const ImgHeadContainer = styled.div`
  position: relative;
`;

const ImageSecondHeader = styled.div`
  background-image: url(${imageFondPred});
  width: 100vw;
  height: 70vh;
  background-repeat: no-repeat;
`;

const HeadTitle = styled.h1`
  margin-top: 0vh;
  position: absolute;
  text-align: center;
  font-size: 4vw;
  bottom: 35vh;
  right: 22vw;
  left: 22vw;
  color: white;
`;
const ImgStarsContainer = styled.div`
  position: relative;
`;
const ImageStars = styled.div`
  border: 1px solid #000;
  background-image: url(${imageStarFond});
  width: 100vw;
  height: 15vh;
  background-repeat: no-repeat;
`;

const TitleForm = styled.h3`
  margin-top: 0vh;
  position: absolute;
  font-size: 3vw;
  bottom: 5vh;
  right: 48vw;
  left: 5vw;
  color: white;
  text-decoration: underline;
`;

const ContainerLocation = styled.div`
  position: relative;
  margin-left: 5vw;
  margin-right: 5vw;
  display: grid;
  grid-template-columns: auto auto;
`;

const UserInput = styled.div`
  position: relative;
  margin-bottom: 4vh;
  width: 45vh;
`;

const DisplayUserLocation = styled.div`
  position: relative;
  margin-bottom: 4vh;
  margin-top: 4vh;
  width: 60vh;
`;

const LocalisationButton = styled.button`
  color: black;
  fontsize: 10vh;
  margin-left: 15vw;
  margin-right: 15vw;
  margin-top: 1vw;
  margin-bottom: 1vw;
  width: 12vw;
  height: 5vh;
  border-radius: 10px;
`;

const EnterCity = styled.form`
  margin-top: 1vh;
  margin-left: 10vw;
  margin-right: 10vw;
  margin-bottom: 1vw;
  width: 30vw;
`;
const EnterACityName = styled.input`
  height: 4vh;
  width: 25vw;
`;

const SubmitCity = styled.input`
  height: 4vh;
  width: 7vw;
  margin-top: 2vh;
  margin-left: 19vw;
  border-radius: 7px;
`;
const VotrePosition = styled.p`
  color: white;
  fontsize: 5vh;
  margin-left: 10vw;
  margin-right: 10vw;
  margin-top: 1vw;
  margin-bottom: 1vw;
  width: 30vw;
`;
const CheckCity = styled.p`
  color: white;
  fontsize: 5vh;
  margin-left: 10vw;
  margin-right: 10vw;
  margin-top: 1vw;
  margin-bottom: 1vw;
  width: 30vw;
`;

const TitleHowObs = styled.h3`
  position: relative;
  font-size: 3vw;
  bottom: 11vh;
  width: 70vw;
  right: 5vw;
  left: 65vw;
  color: white;
  text-decoration: underline;
`;
const ImgHowObs = styled.div`
  background-image: url(${ImageObs});
  width: 50vw;
  height: 50vh;
  margin-left: 25vw;
  margin-right: 25vw;
  background-repeat: no-repeat;
`;

const PredContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;
const RisetimeContainer = styled.div`
  position: relative;
  width: 30vh;
  margin-left: 11vw;
  color: white;
  font-size: 3vh;
`;
const DurationContainerDecalage = styled.div`
  position: relative;
  margin-top: 5vh;
  margin-left: 20vw;
  font-size: 3vh;
`;
const DurationContainer = styled.div`
  position: relative;
  width: 30vh;
  color: white;
`;
