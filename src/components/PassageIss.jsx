//http://open-notify.org/Open-Notify-API/ISS-Pass-Times/
//The API returns a list of upcoming ISS passes for a particular location formatted as JSON.
//As input it expects a latitude/longitude pair, altitude and how many results to return. All fields are required.
//As output you get the same inputs back (for checking) and a time stamp when the API ran in addition to a success or failure message and a list of passes. Each pass has a duration in seconds and a rise time as a unix time stamp.

//https://www.password-generator-tool.com/unix-timestamp-convert-timestamp   about Unix time to Human time
import React, { Component } from "react";
import axios from 'axios';
import Moment from 'react-moment';
import 'moment-timezone';
import 'moment/locale/fr';
import styled from "styled-components";

const Form =  styled.div`
position: relative;
margin-top: 40vh;
margin-bottom: 40vh;
margin-left: 30vw;
margin-right: 30vw;

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
  flex: wrap;
`;
const RisetimeContainer = styled.div`
  position: relative;
  margin-top: 4vh;
  margin-bottom: 4vh;
  width : 35vh;
  flex: wrap;
`;
//https://nominatim.openstreetmap.org/search/Lille?format=json&addressdetails=1&limit=1

Moment.globalLocal = true;

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
      ConsoleDuration:[],
      ConsoleRisetime:[],
      City: [],
      ArrayCity : [],
      CityCheck : []
      
        }
  }
  handleChange(event) {
    this.setState({City: event.target.value});
  }

  handleSubmit(event) {
  //  console.log('La ville : ' + this.state.City);
    this.getCityLocation({ City:event.target.value});
  
    event.preventDefault();
  }

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
getLocation(){
  navigator.geolocation.getCurrentPosition(position => {
    this.setState({ lat: position.coords.latitude, lng: position.coords.longitude });
      this.getPrediction({ lat: position.coords.latitude, lng: position.coords.longitude });
    }, err => console.log(err,'Votre navigateur authorise-il la geolocalisation de votre appareil ?'));
}
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

  
 this.setState({ ApiObject: ApiObject })
}
     )   
}


componentWillUnmount(){
console.log('componentWillUnmount')}
  render() {
  
   const { ApiObject, CityCheck} = this.state;
   

   
    return (
      
      <div >
      <Form > 
      <form onSubmit={this.handleSubmitCity}>
        <label  style={{color:"white"}}>
          Your City :
          <input type="text" value={this.state.City} onChange={this.handleChangeCity} />
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
        {ApiObject.map((temps) => 
        {return <Moment style={{color:"white", fontsize: '5vh', marginRight:'20vw'}} format={`MM-DD-YYYY${" à "}hh:mm`}
         locale="fr"  className="a" unix key={temps.risetime}>
         {temps.risetime}</Moment>
        })} 
        </RisetimeContainer>
        
        <DurationContainer>
        {ApiObject.map((result) =>{
          return <p  style={{color:"white"}} key={result.duration} > 
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