import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
//import 'dayjs/locale/fr';
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
    // relève les nouvelles location depuis les boutons vers le state  
    this.getLocation = this.getLocation.bind(this);
    this.handleChangeCity = this.handleChange.bind(this);
    this.handleSubmitCity = this.handleSubmit.bind(this);
    this.state = {
    // States par defaut de les states qui seront mis à jour par la suite  
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
      ErrorMessage:[],
      ErrorMessageGeolocation:[],
      ApiObjectLoading: false,
      ApiObject: [],
      Desgroupe: [],
      RiTiWiDuDesGroupe: [],
      RitiWithDurDesgroupe: [],
    };
    // Icon de la branche feuillue
    this.UserLocationIcon = L.icon({
      iconUrl: leafRed,
      shadowUrl: leafShadow,
      iconSize: [38, 95], // size of the icon
      shadowSize: [50, 64], // size of the shadow
      iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62], // the same for the shadow
      popupAnchor: [-3, -76],//popup icon position
    });
  }
// remontée de l'Input de l'utilisateur depuis la barre de saisie vers le ploton du state
  handleChange(event) {
    this.setState({ City: event.target.value });
  }
  handleSubmit(event) {
    this.getCityLocation({ City: event.target.value });
    event.preventDefault();
  }
// remet l'input de l'utisateur dans la fonction pour appeler l'api permettant d'avoir la geolocalition 
  getCityLocation() {
    this.getCityLocation.bind(this);
    const CityInput = this.state.City;
// limite le résultat à 1 object json, une localisation    
    const UrlCity = `https://nominatim.openstreetmap.org/search/${CityInput}?format=json&limit=1`;   
// réinitialise le state à null     
 this.setState({err:null})
 axios.get(UrlCity)
 .then(response => {
  const ArrayCity = response.data[0];
  const CityCheck = ArrayCity.display_name;
// met à jours le state de lat, lon, le zoom... et passe le résutat lat et lon à la fonction prédiction  
     this.setState({
      UserLocationIcon: { lat: ArrayCity.lat, lng: ArrayCity.lon },
      CityCheck,
      haveUserLocation: true,
      zoom: 7,
     })
     this.getPrediction({
      UserLocationIcon: {
        lat:  ArrayCity.lat,
        lng:  ArrayCity.lon,
      },
    });
 })
 // Si l'utilisateur à taper n'importe quoi, mets à jours le state de l'(err) et du message d'erreur  
 .catch(err => {
  this.setState({
      err,
      ErrorMessage : ["Please, enter a real location instead"],
     }) 
   });    
 }
// Appel d'une api permetant de geolocaliser plus ou moins le point wifi auquel nous sommes connectés 
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
//met à jours le state de lat et lng        
        this.getPrediction({
          UserLocationIcon: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
        });
//passe les résultats à la fonction CorrectCityName       
        this.CorrectCityName({
          UserLocationIcon: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
        });
      },
//Mets à jours le state (err) et le message d'erreur lié à la non authorisation du navigateur de se géolocalisatin(le zoom étant à 7, donc très large)      
     (err) => 
          this.setState({
            err,
            ErrorMessageGeolocation : ["You didn't allow your navigator to get your location!"],
           }) 
    );
// appel la fonction suivante    
    this.CorrectCityName();
  }
// Appelle l'Api intégrée à js pour mettre à jours le nom de la ville depuis le button geolocalisation
    CorrectCityName() {
      this.CorrectCityName.bind(this);
      const LatCorrek = this.state.UserLocationIcon.lat;
      const LonCorrek = this.state.UserLocationIcon.lng;
      const UrlCorrekCity = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${LatCorrek}&lon=${LonCorrek}&zoom=10`;
   axios.get(UrlCorrekCity)
   .then(response => {
    const ArrayCity = response.data;  
    const CityCheck = ArrayCity.display_name;
 //met à jours le nom de la ville afficher depuis les deux façons d'appeller les api de geolocation
     this.setState({
        CityCheck,
       })
     });
    }
// lat et lng sont transmis à la fonction getPrediction 
    getPrediction() {
    this.getPrediction.bind(this);
    const latitude = this.state.UserLocationIcon.lat;
    const longitude = this.state.UserLocationIcon.lng;
// Cors erreur mais https://code4developers.com/cors-anywhere/    
    this.setState({
      apiPrediction: `https://cors-anywhere.herokuapp.com/http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`,
      headers: {
        Origin: `http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`,
      },
    });
  //Appel l'Api, spinner tant que l'Api n'est pas chargée (ApiObjectLoading = true)
  //mets à jours le state des resultats de l'Api(ApiObject) et passe les résutats à getConversion  
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
 // j'ai pas trouver de moyens de faire autrement, j'ai pas trouvé de moyen des faires des boucles For 
 // sans msg d'erreur 
  getConversion() {
    this.getConversion.bind(this);
// L'Api est senssée donnner 10 temps unix, 5 pour la moment où nous pourront l'apersevoir et 5 pour la durée
// Ici l'object conversion de l'object 0 avec datejs, intégrée à js convertir le temps en temps location 
// selon la forme utilisée en Grande-Bretagne
    const uno = this.state.ApiObject[0].risetime * 1000;
    const ein = new Date(uno);
//Pour avoir la date    
    const un = ein.toLocaleDateString('en-GB');
//Pour avoir l'heure
    const RiTiWiDuOne = ein.toLocaleTimeString('en-GB');
//Pour avoir l'heure de Risetime + duration
    const one = (this.state.ApiObject[0].risetime * 1000) + ((this.state.ApiObject[0].duration)*1000);
    const RitiWithDurUnHeure = new Date(one);
    const DurUnHeure = RitiWithDurUnHeure.toLocaleTimeString('en-GB'); 

    const dos = this.state.ApiObject[1].risetime * 1000;
    const zwei = new Date(dos);
    const deux = zwei.toLocaleDateString('en-GB');
    const RiTiWiDuTwo = zwei.toLocaleTimeString('en-GB');
    const two = (this.state.ApiObject[1].risetime * 1000) + ((this.state.ApiObject[1].duration)*1000);
    const RitiWithDurDeuxHeure = new Date(two);
    const DurDeuxHeure = RitiWithDurDeuxHeure.toLocaleTimeString('en-GB'); 

    const tres = this.state.ApiObject[2].risetime * 1000;
    const drei = new Date(tres);
    const trois = drei.toLocaleDateString('en-GB');
    const RiTiWiDuThree = drei.toLocaleTimeString('en-GB');
    const three = (this.state.ApiObject[2].risetime * 1000) + ((this.state.ApiObject[2].duration)*1000);
    const RitiWithDurTroisHeure = new Date(three);
    const DurTroisHeure = RitiWithDurTroisHeure.toLocaleTimeString('en-GB'); 

    const quatro = this.state.ApiObject[3].risetime * 1000;
    const vier = new Date(quatro);
    const quattre = vier.toLocaleDateString('en-GB');
    const RiTiWiDuFour = vier.toLocaleTimeString('en-GB');
    const four = (this.state.ApiObject[3].risetime * 1000) + ((this.state.ApiObject[3].duration)*1000);
    const RitiWithDurQuatreHeure = new Date(four);
    const DurQuatreHeure = RitiWithDurQuatreHeure.toLocaleTimeString('en-GB'); 

    const cinco = this.state.ApiObject[4].risetime * 1000;
    const funf = new Date(cinco);
    const cinq = funf.toLocaleDateString('en-GB');
    const RiTiWiDuFive = funf.toLocaleTimeString('en-GB');
    const five = (this.state.ApiObject[4].risetime * 1000) + ((this.state.ApiObject[4].duration)*1000);
    const RitiWithDurCinqHeure = new Date(five);
    const DurCinqHeure = RitiWithDurCinqHeure.toLocaleTimeString('en-GB'); 
 //Regroupe les résultats et les séparent dans un tableau   
    const groupe = `${un}+${deux}+${trois}+${quattre}+${cinq}`;
    const Desgroupe = groupe.split('+');
    const RiTiWiDuGroupe = `${RiTiWiDuOne}+${RiTiWiDuTwo}+${RiTiWiDuThree}+${RiTiWiDuFour}+${RiTiWiDuFive}`;
    const RiTiWiDuDesGroupe = RiTiWiDuGroupe.split('+');
    const RitiWithDurRegroupe = `${DurUnHeure}+${DurDeuxHeure}+${DurTroisHeure}+${DurQuatreHeure}+${DurCinqHeure}`;
    const RitiWithDurDesgroupe = RitiWithDurRegroupe.split('+');
    
    this.setState({ Desgroupe, RiTiWiDuDesGroupe, RitiWithDurDesgroupe });
  }
// Enlèves les résultats au bout d'un moment sans qu'on s'en rende compte ? 
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    const { RiTiWiDuDesGroupe, CityCheck, Desgroupe, RitiWithDurDesgroupe } = this.state;
  //regroupe les donnée geo pour l'afficher sur la carte  
    const LocationIcon = [
      this.state.UserLocationIcon.lat,
      this.state.UserLocationIcon.lng,
    ];
 // Const pour avoir un affichage de la lat et lng en passant à la ligne    
    const positionLatLon = ["Latitude   : ",this.state.UserLocationIcon.lat, <br />,"Lontitude : ", this.state.UserLocationIcon.lng];
    return (
      <div>
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
            <UserInput style={{ marginTop: '3vh' }}>            
              <LocalisationButton onClick={this.getLocation}>
                Locate me
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
          <TitleForm>What's the next whatching sesion ? </TitleForm>
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
                      paddingLeft: '7vw',
                      backgroundColor: '#00266F',
                      paddingTop: '3vh',
                      marginTop: '5vh',
                      marginBottom: '8vh',
                      width: '50vw',
                      height: '5vh',
                    }}
                    key={i} 
                  >
                    {RisetimeDate}
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
              <DurationContainerA>
                {RiTiWiDuDesGroupe.map((RiseTimeBegins, i) => {
                  return (
                    <p
                      key={i*5+1} 
                      style={{
                        backgroundColor: 'black',
                        paddingTop: '3vh',
                        marginTop: '8vh',
                        width: '40vw',
                        height: '5vh',
                      }}
                    >
                      You will be able to watch Iss from {RiseTimeBegins}
                    </p>
                  );
                })}
              </DurationContainerA>
              <DurationContainerB>
                {RitiWithDurDesgroupe.map((RiseTimeEnds, i) => {
                  return (
                    <p
                     style={{
                        paddingTop: '3vh',
                        marginTop: '8vh',
                        width: '30vw',
                        height: '5vh',
                      }}
                      key={i*6+1}
                    >
                      to {RiseTimeEnds}
                    </p>
                  );
                })}
              </DurationContainerB>
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
  font-family: Vindemia;
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
  width : 70vw;
  font-family: Vindemia;
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
  font-family: Vindemia;
`;
const CheckCity = styled.p`
  color: white;
  fontsize: 5vh;
  margin-left: 10vw;
  margin-right: 10vw;
  margin-top: 1vw;
  margin-bottom: 1vw;
  width: 30vw;
  font-family: Verdana;
`;

const TitleHowObs = styled.h3`
  position: relative;
  font-size: 3vw;
  bottom: 11vh;
  width: 90vw;
  right: 5vw;
  left: 65vw;
  color: white;
  font-family: Vindemia;
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
  margin-left: 10vw;
`;
const RisetimeContainer = styled.div`
  position: relative;
  width: 30vh;
  margin-left: 11vw;
  color: white;
  font-size: 3vh;
  font-family: Verdana;
`;
const DurationContainerDecalage = styled.div`
  position: relative;
  margin-top: 5vh;
  margin-left: 40vw;
  font-size: 3vh;
`;
const DurationContainerA = styled.div`
  position: relative;
  width: 40vh;
  color: white;
  right : 40vw;
  font-family: Verdana;
`;
const DurationContainerB = styled.div`
  position: absolute;
  color: white;
  bottom: 0vh;
  width: 40vw;
  left: 60vw;
  color: white;
  font-family: Verdana;
`;