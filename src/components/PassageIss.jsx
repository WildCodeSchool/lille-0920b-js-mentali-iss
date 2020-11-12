
import React, { Component } from "react";
import axios from 'axios';
import styled from "styled-components";
import "dayjs/locale/fr";
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import Lille from '../assets/Lille.png';
import imageFondPred from '../assets/imageFondPred.jpg';
import imageStarFond from '../assets/imageStarFond.jpg';
import ImageObs  from '../assets/ImageObs.jpg';


class PassageIss extends Component {
  constructor(props) {
    super(props);
    this.getLocation = this.getLocation.bind(this);
    this.handleChangeCity = this.handleChange.bind(this);
    this.handleSubmitCity = this.handleSubmit.bind(this);
    this.state = {
      LilleIcon: {
        lat: 0,
        lng: 0,
      },
      zoom: 1.4,
      haveUserLocation: false,
      lat: null,
      lng: null,
      ApiObject: [],
      City: [],
      ArrayCity : [],
      CityCheck : [],
      Desgroupe : [],
        }
        this.LilleIcon = L.icon({
          iconUrl: Lille,
          iconSize: [100, 100], // size of the icon
          iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
          popupAnchor: [-3, -76] // When click, display message
        });
  }
  // request city field for call "Nominatim"
// pourquoi faut-il les binder en changeant leur nom ?
  handleChange(event) {
    this.setState({City: event.target.value});
  }

  handleSubmit(event) {
  //  console.log('La ville : ' + this.state.City);
    this.getCityLocation({ City:event.target.value});
    event.preventDefault();
  }
//--------------------------------------------------------------------------------------------------//
//use getcityLocation function to call "Nominatim";
//Nominatim is an API which used OpenStreetMap to find locations on earth name;
//API get 3 data : lat, long and city check;
//lat and long update the state;
//lat and long are require to the callbackfunction "get Prediction";
//citycheck const is use to get feedback for user when submit button is on;
//find a json object to view Lille data : https://nominatim.openstreetmap.org/search/Lille?format=json&addressdetails=1&limit=1
//pourquoi la binder dans la fonction ?

  getCityLocation(){ 
    this.getCityLocation.bind(this);
   
    const CityInput = this.state.City;
    const UrlCity = `https://nominatim.openstreetmap.org/search/${CityInput}?format=json&limit=1`;
    axios.get(UrlCity)
      .then(response => {
      const ArrayCity = response.data[0];  
      const CityCheck = ArrayCity.display_name;
      this.setState({ lat: ArrayCity.lat, lng: ArrayCity.lon, CityCheck: CityCheck,
        LilleIcon: {lat: ArrayCity.lat, lng: ArrayCity.lon},
        haveUserLocation : true, zoom: 50,
       });
     this.getPrediction()
      })

  }
  //----------------------------------------------------------------------------------------------//

// use getLocation function to call browser localisation pop-up;
// getLocation call getCurrentPosition function;
// getCurrentPosition function is use to :
// update lat and long state;
// give lat and long require by getPrediction function;
getLocation(){
  navigator.geolocation.getCurrentPosition(position => {
    this.setState({ lat: position.coords.latitude, lng: position.coords.longitude, zoom: 50,
      LilleIcon: {lat: position.coords.latitude, lng: position.coords.longitude},
      haveUserLocation : true});
      this.getPrediction({ lat: position.coords.latitude, lng: position.coords.longitude });
    }, err => console.log(err,'Votre navigateur authorise-il la geolocalisation de votre appareil ?'));
}
//-------------------------------------------------------------------------------------------------//

//getPrediction function is use to :
//call lat and long state and keep it on 2 let "latitude" & "longitude"
//update the state of apiPredicition object;
//needs to explain the update apiPrediction state ?????
//call open-notify API to have ISS predictions :
// dates, duration, visibility,
   getPrediction(){ 
    this.getPrediction.bind(this);
let latitude = this.state.lat;
let longitude = this.state.lng;
this.setState({apiPrediction : `https://cors-anywhere.herokuapp.com/http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`,
headers: {'Origin': `http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`}})
const url = this.state.apiPrediction; 
axios.get(url)
.then(( res ) => {
  let ApiObject = res.data.response;
  console.log(ApiObject)
 this.setState({ ApiObject: ApiObject})
 this.getConversion({ApiObject : ApiObject})
}
)   
}
getConversion(){
  this.getConversion.bind(this)

  let uno = this.state.ApiObject[0].risetime*1000;
  let ein = new Date(uno);
  let un = ein.toLocaleString('en-GB');
   console.log(un);
  let dos = this.state.ApiObject[1].risetime*1000;
  let zwei = new Date(dos);
  let deux = zwei.toLocaleString('en-US');
  console.log(deux)

  let tres = this.state.ApiObject[2].risetime*1000;
  let drei = new Date(tres);
  let trois = drei.toLocaleString('en-US');
  console.log(trois)

  let quatro = this.state.ApiObject[3].risetime*1000;
  let vier = new Date(quatro);
  let quattre = vier.toLocaleString('en-US');
  console.log(quattre)

  let cinco = this.state.ApiObject[4].risetime*1000;
  let funf = new Date(cinco);
  let cinq = funf.toLocaleString('en-US');
  console.log(cinq)
  let groupe = un + '+' + deux +'+'+ trois +'+'+ quattre+ '+' + cinq ;
  var Desgroupe = groupe.split('+');
 console.log(Desgroupe)
 
this.setState({ Desgroupe : Desgroupe})  
}
componentWillUnmount(){
console.log('componentWillUnmount')}
  
render() {
    
  const { ApiObject, CityCheck,  Desgroupe  } = this.state;
 const positionLilleIcon = [this.state.LilleIcon.lat, this.state.LilleIcon.lng];
    return (
      
      <div >
      <ImgHeadContainer> 
      <ImageSecondHeader alt="Beautifool evening picture"/>
      <HeadTitle>De chez vous observez l'ISS</HeadTitle>
      </ImgHeadContainer>
      
      <ImgStarsContainer > 
      <ImageStars alt="Dark sky full of stars"/>
      <TitleForm>Selectionnez votre spot d'observation !</TitleForm>
      </ImgStarsContainer>
     
     <div> 
      <ContainerLocation> 
      <UserInput style={{marginTop:"3vh"}}>
       <LocalisationButton  
       onClick={this.getLocation}>Localize Me</LocalisationButton>
       
        <TitleCityForm>Your City :</TitleCityForm>
        <EnterCity onSubmit={this.handleSubmitCity}>
        <label  style={{color:"black"}}>
         Or enter a city name : 
          <EnterACityName type="text" placeholder="Tananarive" value={this.state.City} onChange={this.handleChangeCity} required />
        </label>
        <SubmitCity type="submit" value="Envoyer"/>
      </EnterCity>
      <VotrePosition > {this.state.lat} {this.state.lng}</VotrePosition>
        <CheckCity>{CityCheck} </CheckCity>
      </UserInput>
      <DisplayUserLocation> 
       
      <Map className="map" center={positionLilleIcon} zoom={this.state.zoom}
      style={{height:"50vh", width:"35vw", borderRadius:"10px"}}>
        <TileLayer attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
        {this.state.haveSateliteLocation &&
          <Marker position={positionLilleIcon} icon={this.LilleIcon} >
            <Popup>
              Here we are
            </Popup>
          </Marker>
        }
      </Map>
        </DisplayUserLocation>
        </ContainerLocation>
        </div>
        <ImgStarsContainer> 
        <ImageStars alt="Dark sky full of stars"/>

        <TitleHowObs>How to observe it ? </TitleHowObs>
        <ImgHowObs alt="Picture helping understand how to observe ISS"/>
        </ImgStarsContainer>
        <ImgStarsContainer > 
      <ImageStars alt="Dark sky full of stars"/>
      <TitleForm>Prochaine observation possibles</TitleForm>
      </ImgStarsContainer>
     
      <PredContainer>
      
      <RisetimeContainer>
      {Desgroupe.map((tem) => 
        {return <p style={{paddingLeft : '7vw', backgroundColor:"darkblue",paddingTop:'3vh',  marginTop: "5vh", marginBottom: "8vh", width: "70vw", height: "5vh"}}
        key={tem}>
         {tem} </p>
        })} 
        </RisetimeContainer>
        <DurationContainerDecalage>
        <DurationContainer>
        {ApiObject.map((result) =>{
          return <p  key={result.duration} style={{backgroundColor:"black",paddingTop:'3vh',  marginTop: "8vh", width: "30vw", height: "5vh"}}> 
          Visible pendant {Math.floor((result.duration)/60)}
          m'{Math.round((result.duration)%60)}s'</p>
        })}
        </DurationContainer>
        </DurationContainerDecalage>
        </PredContainer>
           <p>Bas de la page</p>
      </div>
        );
  }
   }
export default PassageIss;

const ImgHeadContainer = styled.div`
  position: relative;
   `


const ImageSecondHeader = styled.div`
background-image: url(${imageFondPred});
width: 100vw;
height: 70vh;
background-repeat: no-repeat;`

const HeadTitle = styled.h1`
margin-top: 0vh;
 position: absolute;
 text-align: center;
 font-size: 4vw;
 bottom: 35vh;
  right: 22vw;
  left: 22vw;
  color: white;
  `
  const ImgStarsContainer = styled.div`
  position: relative;
   `
const ImageStars = styled.div`
border: 1px solid #000;
background-image: url(${imageStarFond});
width: 100vw;
height: 15vh;
background-repeat: no-repeat;`

const TitleForm = styled.h3`
margin-top: 0vh;
 position: absolute;
 font-size: 3vw;
 bottom: 5vh;
  right: 48vw;
  left: 5vw;
  color: white;
  text-decoration: underline;
  `
  
  
const ContainerLocation =  styled.div`
position: relative;
  margin-left: 5vw;
  margin-right: 5vw;
  display: grid;
  grid-template-columns: auto auto;
  `

const UserInput = styled.div`
position: relative;
  margin-bottom: 4vh;
  width : 45vh;
  `
 
  const DisplayUserLocation = styled.div`
position: relative;
  margin-bottom: 4vh;
  margin-top: 4vh;
  width : 60vh;
  `

const LocalisationButton = styled.button`
color: black; 
fontsize: 10vh;
margin-left: 15vw;
margin-right: 15vw;
margin-top: 1vw;
margin-bottom: 1vw;
width : 12vw;
height : 5vh;
border-radius: 10px;
`

 const TitleCityForm = styled.h4`
 margin-top: 1vh;
 margin-left: 21vh;
 position: relative;
 font-size: 2vw;
  color: white;
  width : 15vw
    ` 
const EnterCity= styled.form`
margin-top: 1vh;
margin-left: 10vw;
margin-right: 10vw;
margin-bottom: 1vw;
width : 30vw; `
const EnterACityName= styled.input`
height: 4vh;
width:25vw; `

const SubmitCity=styled.input`
height: 4vh; 
width: 7vw;
margin-top: 2vh;
margin-left:19vw;
border-radius: 7px; 
`
const VotrePosition= styled.p`
color: white; 
fontsize: 5vh;
margin-left: 10vw;
margin-right: 10vw;
margin-top: 1vw;
margin-bottom: 1vw;
width : 30vw;
`
const CheckCity= styled.p`
color: white; 
fontsize: 5vh;
margin-left: 10vw;
margin-right: 10vw;
margin-top: 1vw;
margin-bottom: 1vw;
width : 30vw;` 


const TitleHowObs = styled.h3`

 position: relative;
 font-size: 3vw;
 bottom: 11vh;
 width: 70vw;
  right: 5vw;
  left: 65vw;
  color: white;
  text-decoration: underline;
  `
const ImgHowObs = styled.div `
background-image: url(${ImageObs});
width: 50vw;
height: 50vh;
margin-left: 25vw;
margin-right: 25vw;
background-repeat: no-repeat;`

const PredContainer = styled.div`

  display: grid;
  grid-template-columns: auto auto; 
`
const RisetimeContainer = styled.div`
  position: relative;
  width : 30vh;
  margin-left : 11vw;  
  color : white;
  font-size: 3vh;
`;
const DurationContainerDecalage = styled.div `
position: relative;
margin-top: 5vh;
margin-left: 20vw;
font-size: 3vh;
`
const DurationContainer = styled.div`
  position: relative;
  width : 30vh;
  color : white;
`;
