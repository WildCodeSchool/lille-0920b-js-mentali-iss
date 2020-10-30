import React, { Component } from 'react';
import './ViewISS.css';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Lille from '../assets/Lille.png';

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
      popupAnchor: [-3, -76] // When click, display message
    });
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        LilleIcon: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        },
        haveUsersLocation: true,
        zoom: 50
      });
    })
  }
  render() {
    const positionLilleIcon = [this.state.LilleIcon.lat, this.state.LilleIcon.lng];

    return (
      <Map className="map" center={positionLilleIcon} zoom={this.state.zoom}>
        <TileLayer
          attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
        {this.state.haveUsersLocation &&
          <Marker position={positionLilleIcon} icon={this.LilleIcon}>
            <Popup>
              Here we are
            </Popup>
          </Marker>
        }
      </Map>
    );
  }
}

export default ViewISS;