import React from 'react';
//import styled from 'styled-components';
import axios from "axios";
import DisplayCrew from './DisplayCrew'

const sampleSimpsons = {
    message: "hello",
    number: 2,
    people: {
      name:"Guy",
    }
    }
  
class Crew extends React.Component {
    constructor(props) {
      super(props);
      this.state={
        quote: sampleSimpsons
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
          quote: data,
    });
      });
} 
render () {
  return (
    <div className="App">
      <DisplayCrew quotes={this.state.quote} />
      <button type="button" onClick={this.getQuote}>Get quote</button>
    </div>
  );
}
}

export default Crew;