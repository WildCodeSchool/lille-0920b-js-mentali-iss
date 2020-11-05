import React from 'react';
//import styled from 'styled-components';
import axios from "axios";
import DisplayCrew from './DisplayCrew'

class Crew extends React.Component {
    constructor(props) {
      super(props);
      this.state={
        message: "hello",
        number: 20,
        name:"Guy",
        craft: "punto",
      };
      this.getQuote = this.getQuote.bind(this);
    }

    getQuote () {
    // Send the request
    axios.get('http://api.open-notify.org/astros.json')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        console.log(data)
        this.setState({
          message: data.message,
          number: data.number,
          name: data.people[0].name,
          craft: data.people[0].craft,
    });
      });
} 
render () {
  return (
    <div className="App">
      <DisplayCrew quotes={this.state} />
      <button type="button" onClick={this.getQuote}>Get quote</button>
    </div>
  );
}
}

export default Crew;