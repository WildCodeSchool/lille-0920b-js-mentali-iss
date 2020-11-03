import React, { Component } from 'react';
import './ViewISS.css';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Iss from '../assets/iss.png';
import axios from 'axios';

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
      zoom: 2
    }
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
      this.recalIss()
      this.interval = setInterval(this.recalIss, 2500)
    }
    //call API (stock in ISS-URL) by Axios
    //import json object from API with.then
    //update state of "issPosition" with data result from json object
    //update haveUsersLocation ?
    recalIss = () => {
    axios.get(ISS_URL)
    .then(({data}) => {
      console.log(data)
      this.setState({
        SatIcon: {
        lat: data.iss_position.latitude,
        lng: data.iss_position.longitude
      },
      haveUsersLocation: true,
      zoom: 2
    })
    })
    }
   
  render() {
    const positionSatIcon = [this.state.SatIcon.lat, this.state.SatIcon.lng];
    return (
      <div> 
        <h1 id="Titre">Position de l'iSS en temps réél</h1>
      <Map className="map" center={[0, 90]} zoom={this.state.zoom}>
        <TileLayer
          attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
        {this.state.haveUsersLocation &&
          <Marker position={positionSatIcon} icon={this.SatIcon}>
          </Marker>
        }
      </Map>
      
      <div  className="ImgContainerButton">
        <a href="#b" className="ChezVous" data-inf="photo">
          <img id="ImgButton" src="/photos/starObs.jpg" alt="logo" />
      <div className ="centered"> 
        <p>Observez l'ISS </p><p>depuis chez vous </p> </div>
        </a>   
      </div>
      </div>
    );
  }
}

export default ViewISS;