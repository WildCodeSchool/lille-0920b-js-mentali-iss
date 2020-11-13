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
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
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
                  <option value="year">Year</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                  <option value="2015">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                  <option value="2012">2012</option>
                  <option value="2011">2011</option>
                  <option value="2010">2010</option>
                  <option value="2009">2009</option>
                  <option value="2008">2008</option>
                  <option value="2007">2007</option>
                  <option value="2006">2006</option>
                  <option value="2005">2005</option>
                  <option value="2004">2004</option>
                  <option value="2003">2003</option>
                  <option value="2002">2002</option>
                  <option value="2001">2001</option>
                  <option value="2000">2000</option>
                  <option value="1999">1999</option>
                  <option value="1998">1998</option>
                  <option value="1997">1997</option>
                  <option value="1996">1996</option>
                </Select>
              </label>
              <Submit type="submit" value="Submit" />
            </form>
          </BaliseSelection>
          <div className="GaleriePage">
            {this.state.photo ? (
              <DisplayChooseADate photo={this.state.photo} />
            ) : (
              <ChooseADateImg src="/photos/choseadate.png" alt="chose a date" />
            )}
          </div>
        </Textcolor>
      </Page>
    );
  }
}

export default ChooseADate;
