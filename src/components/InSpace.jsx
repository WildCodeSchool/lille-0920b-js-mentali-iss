import React from 'react';
//import styled from 'styled-components';
import axios from "axios";
import MapPageCards from './MapPageCards';

class InSpace extends React.Component {
    constructor(props) {
      super(props);
      this.state={
        people:[],
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
          console.log(data.people)
          this.setState({
          people: data.people,
          });
        });
    }

render () {
  return (
    <div>
      <div>
         {this.state.people.map((name, index, craft) => (
        <MapPageCards key={index} {...name} />
      ))}
      </div>
    </div>
  );
}
}

export default InSpace;


  


 

