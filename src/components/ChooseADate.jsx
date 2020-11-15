import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import DisplayChooseADate from "./DisplayChooseADate.jsx";

const Page = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
  padding-bottom: 6vh;
`;

const Textcolor = styled.p`
  color: white;
`;

const ChooseADateImg = styled.img`
  width: 50vw;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border: solid white;
`;

const BaliseSelection = styled.div`
  display: block;
  margin-bottom: 4vh;
  margin-left: 26.5vw;
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
  background: #f5f5f5;
  border: none;
  color: #555;
  font: bold 12px;
  margin-left: 2vw;
  padding: 6px 0 6px 0;
  border: 1px solid #ccc;
`;

class ChooseADate extends Component {
  buildDays() {
    var arrDay = [];

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
    var arrYear = [];

    for (let i = 1996; i <= 2020; i++) {
      arrYear.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }

    return arrYear;
  }

  constructor(props) {
    super(props);
    this.state = {
      //*on définie les paramètres de la fonction
      photo: null,
      year: null,
      month: null,
      day: null,
    };
    this.getGalerie = this.getGalerie.bind(this);
  }

  //On lui dit ce qui va changer
  componentDidMount() {
    this.getGalerie(this.state.year, this.state.month, this.state.day);
  }

  getGalerie(year, month, day) {
    // Récupération de l'API et changement des 3 paramètres
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=X0pTCLU1WDtehvcdyz3Ju71cdobzX2RzjUDLTzk8&date=${year}-${month}-${day}`
      )
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        this.setState({
          photo: data,
        });
      });
  }

  //Au changement du mois, la nouvelle valeur de month devient monthValue
  handleChangeMonth = (e) => {
    const monthValue = e.target.value;
    console.log(monthValue);
    this.setState({ month: monthValue });
  };

  handleChangeDay = (e) => {
    const dayValue = e.target.value;
    console.log(dayValue);
    this.setState({ day: dayValue });
  };

  handleChangeYear = (e) => {
    const yearValue = e.target.value;
    console.log(yearValue);
    this.setState({ year: yearValue });
  };

  //Quand on clique sur submit on modifie les paramètres de la fonction getGalerie et on l'active
  handleSubmit = (e) => {
    e.preventDefault();
    this.getGalerie(this.state.year, this.state.month, this.state.day);
  };

  render() {
    return (
      <Page>
        <Textcolor>
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
                <Select
                  value={this.state.year}
                  onChange={this.handleChangeYear}
                >
                  <option value="yaer">Year</option>
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
              <ChooseADateImg src="/photos/choseadate.png" alt="cook" />
            )}
          </div>
        </Textcolor>
      </Page>
    );
  }
}

export default ChooseADate;
