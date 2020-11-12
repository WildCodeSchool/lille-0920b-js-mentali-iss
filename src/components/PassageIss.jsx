
import React, { Component } from "react";
import axios from 'axios';
import styled from "styled-components";
import "dayjs/locale/fr";

import imageFondPred from '../assets/imageFondPred.jpg'
import imageStarFond from '../assets/imageStarFond.jpg'
import PlaceHolderMap from '../assets/PlaceHolderMap.JPG'
import ImageObs  from '../assets/ImageObs.jpg'

//https://nominatim.openstreetmap.org/search/Lille?format=json&addressdetails=1&limit=1




class PassageIss extends Component {
  constructor(props) {
    super(props);
    this.getLocation = this.getLocation.bind(this);
    this.handleChangeCity = this.handleChange.bind(this);
    this.handleSubmitCity = this.handleSubmit.bind(this);
    this.state = {
      lat: null,
      lng: null,
      ApiObject: [],
      City: [],
      ArrayCity : [],
      CityCheck : [],
      Desgroupe : []

      
        }
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
  //  console.log(this.state.City)
    const UrlCity = `https://nominatim.openstreetmap.org/search/${CityInput}?format=json&limit=1`;
    console.log(UrlCity)
    axios.get(UrlCity)
      .then(response => {
   //     console.log(response.data);
      const ArrayCity = response.data[0];  
      console.log(ArrayCity)
      const CityCheck = ArrayCity.display_name;
      console.log(CityCheck)
      this.setState({ lat: ArrayCity.lat, lng: ArrayCity.lon, CityCheck: CityCheck });
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
    this.setState({ lat: position.coords.latitude, lng: position.coords.longitude });
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
  console.log(this.state.ApiObject)

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
 // let a =  Desgroupe.splice(0, 4, 'GMT+0100 (heure normale d’Europe centrale'));
 // console.log(Desgroupe)
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
      <UserInput>
       <LocalisationButton  
       onClick={this.getLocation}>Localize Me</LocalisationButton>
       
        <TitleCityForm>Your City :</TitleCityForm>
        <EnterCity onSubmit={this.handleSubmitCity}>
        <label  style={{color:"black"}}>
         Or enter a city name : 
          <EnterACityName type="text" placeholder="Tananarive" value={this.state.City} onChange={this.handleChangeCity} required />
        </label>
        <SubmitCity type="submit" value="Envoyer" />
      </EnterCity>
      <VotrePosition > {this.state.lat} {this.state.lng}</VotrePosition>
        <CheckCity>{CityCheck} </CheckCity>
      </UserInput>
      <DisplayUserLocation> 
       
        <Placeholder alt="Placeholcer Map"></Placeholder>
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
        {return <p style={{backgroundColor:"blue",paddingTop:'3vh',  marginTop: "5vh", marginBottom: "8vh", width: "70vw", height: "5vh"}}
        key={tem}>
         {tem} </p>
        })} 
        </RisetimeContainer>
        
        <DurationContainer>
        {ApiObject.map((result) =>{
          return <p  key={result.duration} style={{backgroundColor:"black",paddingTop:'3vh',  marginTop: "5vh", width: "70vw", height: "5vh"}}> 
          Visible pendant {Math.floor((result.duration)/60)}
          m'{Math.round((result.duration)%60)}s'</p>
        })}
        </DurationContainer>
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
  border: solid 2px green;
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
  width : 45vh;
  `

  const Placeholder = styled.div`
  position: relative;
    width : 60vh;
    height : 60vh;  
    border-radius: 10px;
background-image: url(${PlaceHolderMap});
background-repeat: no-repeat;
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
  margin-left : 15vw;  
  color : white;
  font-size: 3vh;
`;
const DurationContainer = styled.div`
  position: relative;
  margin-top: 8vh;
  margin-bottom: 4vh;
  width : 30vh;
  color : white;
`;
