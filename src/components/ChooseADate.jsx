import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import DisplayChooseADate from "./DisplayChooseADate.jsx";

const size = {
  xs: "320px",
  sm: "768px",
  lg: "1200px",
};

const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  lg: `(max-width: ${size.lg})`,
};

const Page = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
  padding-bottom: 6vh;
`;

const ChooseADateImg = styled.img`
  width: 50vw;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border: solid white;
  @media ${device.xs} {
    width: 80vw;
  }
`;

const BaliseSelection = styled.div`
  display: block;
  margin-bottom: 4vh;

  @media ${device.xs} {
    width: 100vw;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Select = styled.select`
  width: 10vw;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 2vw;

  border-radius: 10px;
  @media ${device.xs} {
    width: 20vw;
  }
  option {
    color: black;
    background: white;
    font-weight: small;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

const Submit = styled.input`
  width: 6vw;
  height: 4.5vh;
  border-radius: 12px 0 12px 0;
  background: #260433;
  border: none;
  color: #fcfcfc;
  font: bold 12px;
  margin-left: 2vw;
  padding: 6px 0 6px 0;
  border: 1px solid #1d0224;
  @media ${device.xs} {
    width: 25vw;
    height: 7vh;
  }
`;

class ChooseADate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //*on définie les paramètres de la fonction
      photo: null,
      year: "year",
      month: "month",
      day: "day",
    };
    this.getGalerie = this.getGalerie.bind(this);
  }

  buildDays() {
    let arrDay = [];

    for (let i = 1; i <= 31; i++) {
      arrDay.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }

    return arrDay;
  }

  buildYear() {
    let arrYear = [];

    for (let i = 1996; i <= 2020; i++) {
      arrYear.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }

    return arrYear;
  }

  getGalerie(year, month, day) {
    // Retrieving the API and changing the 3 parameters
    const api_key = process.env.REACT_APP_APIDAY_KEY;
    axios

      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${year}-${month}-${day}`
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          photo: data,
        });
      });
  }

  //When the month changes, the new value of month becomes monthValue
  handleChangeMonth = (e) => {
    const monthValue = e.target.value;
    this.setState({ month: monthValue });
  };

  handleChangeDay = (e) => {
    const dayValue = e.target.value;
    this.setState({ day: dayValue });
  };

  handleChangeYear = (e) => {
    const yearValue = e.target.value;
    this.setState({ year: yearValue });
  };

  //When you click on submit, you modify the parameters of the getGalerie and activate it
  handleSubmit = (e) => {
    e.preventDefault();
    this.getGalerie(this.state.year, this.state.month, this.state.day);
  };

  render() {
    return (
      <Page>
        <BaliseSelection>
          <form onSubmit={this.handleSubmit}>
            <label>
              <Select value={this.state.day} onChange={this.handleChangeDay}>
                <option value="day">Day</option>
                {this.buildDays()}
              </Select>
            </label>
            <label>
              <Select
                value={this.state.month} //*On met bien les values dans un langage que l'api comprend
                onChange={this.handleChangeMonth}
              >
                <option value="month">Month</option>
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </Select>
            </label>
            <label>
              <Select value={this.state.year} onChange={this.handleChangeYear}>
                <option value="year">Year</option>
                {this.buildYear()}
              </Select>
            </label>
            <Submit type="submit" value="Submit" />
          </form>
        </BaliseSelection>
        <div className="GaleriePage">
          {this.state.photo ? (
            <DisplayChooseADate photo={this.state.photo} />
          ) : (
            <ChooseADateImg src="/photos/choseadate.png" alt="choose a date" />
          )}
        </div>
      </Page>
    );
  }
}

export default ChooseADate;
