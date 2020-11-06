import React from 'react';
//import styled from 'styled-components';
import axios from "axios";
import MapPageCards from './MapPageCards'

class InSpace extends React.Component {
    constructor(props) {
      super(props);
      this.state={
        name:null,
        craft: null,
      };
      this.getCrew = this.getCrew.bind(this);
    }

    componentDidMount() {
      this.getCrew();
    }

    getCrew() {
      axios
        .get('http://api.open-notify.org/astros.json')
        .then((response) => response.data)
        .then((data) => {
          console.log(data)
          this.setState({
          name: data.people[0].name,
          craft: data.people[0].craft,
          });
        });
    }

render () {
  return (
    <div className="App">
      <MapPageCards astronaute = {this.state} />
    </div>
  );
}
}

export default InSpace;


  


 

