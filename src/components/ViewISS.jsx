import React, { Component } from 'react';
import './ViewISS.css';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Lille from '../assets/logoISS2.jpg';
import axios from 'axios';

const ISS_URL = "http://api.open-notify.org/iss-now.json";

class ViewISS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LilleIcon: {
        lat: 50.63297,
        lng: 3.05858,
      },
      haveUsersLocation: false,
      zoom: 4
    }
    this.LilleIcon = L.icon({
      iconUrl: Lille,
      iconSize: [100, 100], // size of the icon
      iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
    });
  }    

    componentDidMount() {
      this.recalIss()
      this.interval = setInterval(this.recalIss, 5000)
    }

  recalIss = () => {
    axios.get(ISS_URL)
    .then(({data}) => {
      console.log(data)
      this.setState({
      LilleIcon: {
        lat: data.iss_position.latitude,
        lng: data.iss_position.longitude
      },
      haveUsersLocation: true,
      zoom: 4
    })
    })

  }

  render() {
    const positionLilleIcon = [this.state.LilleIcon.lat, this.state.LilleIcon.lng];

    return (
      <div> 
        <h1 id="Titre">Position de l'iSS en temps réél</h1>
      <Map className="map" center={positionLilleIcon} zoom={this.state.zoom}>
        <TileLayer
          attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
        {this.state.haveUsersLocation &&
          <Marker position={positionLilleIcon} icon={this.LilleIcon}>
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