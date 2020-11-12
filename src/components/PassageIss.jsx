//http://open-notify.org/Open-Notify-API/ISS-Pass-Times/
//The API returns a list of upcoming ISS passes for a particular location formatted as JSON.
//As input it expects a latitude/longitude pair, altitude and how many results to return. All fields are required.
//As output you get the same inputs back (for checking) and a time stamp when the API ran in addition to a success or failure message and a list of passes. Each pass has a duration in seconds and a rise time as a unix time stamp.

//https://www.password-generator-tool.com/unix-timestamp-convert-timestamp   about Unix time to Human time
import React, { Component } from "react";
import axios from 'axios';
import styled from "styled-components";
import "dayjs/locale/fr";


const Form =  styled.div`
position: relative;
margin-top: 40vh;
margin-bottom: 40vh;
margin-left: 20vw;
margin-right: 20vw;

`;
const PredContainer = styled.div`

  display: grid;
  grid-template-columns: auto auto;
  
`;
const DurationContainer = styled.div`
  position: relative;
  margin-top: 4vh;
  margin-bottom: 4vh;
  width : 30vh;
  
`;
const RisetimeContainer = styled.div`
  position: relative;
  margin-top: 4vh;
  margin-bottom: 4vh;
  width : 70vh;
 
`;
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
   // console.log(UrlCity)
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
      
      <Form > 
      <form onSubmit={this.handleSubmitCity}>
        <label  style={{color:"white"}}>
          Your City :
          <input type="text" value={this.state.City} onChange={this.handleChangeCity} required />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
        <p  style={{color:"white"}}>{CityCheck}</p>

       <button style={{color:"red", fontsize: '5vh', marginTop:'7vw'}} 
       onClick={this.getLocation}>Localisation</button>
        <p  style={{color:"white"}}>Notre position Latitude: {this.state.lat}</p>
        <p  style={{color:"white"}}>Notre position Longitude: {this.state.lng}</p>
        
        
     
     
      <PredContainer>
       

      <RisetimeContainer>
   
      {Desgroupe.map((tem) => 
        {return <p style={{color:"white", fontsize: '5vh', marginTop:'5vw'}}
        key={tem}>
         {tem} </p>
        })} 
        </RisetimeContainer>
        
        <DurationContainer>
        {ApiObject.map((result) =>{
          return <p style={{color:"white", fontsize: '5vh', marginTop:'5vw'}} key={result.duration} > 
          Visible pendant {Math.floor((result.duration)/60)}
          m'{Math.round((result.duration)%60)}s'</p>
        })}
        </DurationContainer>
        </PredContainer>
        </Form>
      </div>
      
    );
  }
   }
export default PassageIss;
