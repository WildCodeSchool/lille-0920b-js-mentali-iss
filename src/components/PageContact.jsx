import styled from "styled-components";
import React, { Component } from "react";

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

const Fond = styled.div`
  color: black;
  width: 100vw;
  height: 100vh;
  background-image: url("/photos/fondcontact.jpg");
  background-repeat: no-repeat;
`;

const Formulaire = styled.form`
  width: 40vw;
  float: right;
  margin-top: 20vh;
  margin-right: 10vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50vh;
  @media ${device.sm} {
    height: 47vh;
    width: 45vh;
  }
`;

const DivLabel = styled.div`
  display: flex;
  justify-content: center;
  margin: 5vh;
  width: 100%;
  text-align: start;
  height: 2.7vh;

  @media ${device.sm} {
  }
`;

const DivTheme = styled.div`
  display: flex;
  justify-content: center;
  margin: 5vh;
  width: 100%;
  text-align: start;
  height: 2.7vh;

  @media ${device.sm} {
  }
`;

const Select = styled.select`
  width: 53%;
  height: 4vh;
  background: white;
  color: gray;
  font-size: 14px;
  border: none;
  text-align: start;
  border-radius: 3px;
  text-align-last: center;
  @media ${device.xs} {
    width: 20vw;
  }
  option {
    color: black;
    background: white;
    font-weight: small;
    display: flex;
    white-space: pre;
    text-align-last: center;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

const Textarea = styled.textarea`
  width: 53%;
  height: 15vh;
  border-radius: 5px;
  text-align-last: center;
`;

const Label = styled.label`
  color: white;
  text-shadow: 1px 1px 2px black;
  display: inline-block;
  margin-right: 2vw;
  width: 30%;
  @media ${device.sm} {
    height: 3vh;
    width: 14vh;
  }
`;

const Input = styled.input`
  width: 50%;
  text-align: center;
`;

const StyledButton = styled.input`
  padding: 0 20px;
  border: none;
  background: #370d53;
  color: #c4c1c7;
  letter-spacing: 2px;
  transition: 0.2s all ease-in-out;
  border-bottom: 2px solid transparent;
  outline: none;
  height: 4vh;
  border-radius: 5px;
  margin: 10vh;
  &:hover {
    background: #51218f;
    color: #d7d0db;

    cursor: pointer;
  }
  @media ${device.sm} {
    margin: 1vh 0;
  }
`;

const place = [];
for (let i = 1; i < 6; i += 1) {
  place.push(
    <option value={i} key={i}>
      {i}
    </option>
  );
}

const luggage = [];
for (let i = 1; i < 6; i += 1) {
  luggage.push(
    <option value={i} key={i}>
      {i}
    </option>
  );
}

const day = [];
for (let i = 1; i < 32; i += 1) {
  day.push(
    <option value={i} key={i}>
      {i}
    </option>
  );
}

export default class PageContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastname: "",
      firstname: "",
      email: "",
      theme: "",
      message: "",
    };
  }

  onChange = (e) => {
    switch (e.target.name) {
      default:
        this.setState({
          [e.target.name]: e.target.value,
        });
    }
  };

  //We can't do back-end for now so we have just an alert
  submitForm = (e) => {
    e.preventDefault();
    alert("Your message has been sended !");
  };

  render() {
    return (
      <Fond>
        <Formulaire onSubmit={this.submitForm}>
          <fieldset>
            <DivLabel>
              <Label htmlFor="name">Lastname :</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Lastname"
                onChange={this.onChange}
                value={this.state.name}
                required
              />
            </DivLabel>
            <DivLabel>
              <Label htmlFor="departure">Firstname:</Label>
              <Input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Firstname"
                onChange={this.onChange}
                value={this.state.firstname}
                required
              />
            </DivLabel>
            <DivLabel>
              <Label htmlFor="arrival">Email :</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={this.onChange}
                value={this.state.email}
                required
              />
            </DivLabel>
            <DivTheme>
              <Label htmlFor="month_departure">Choose a theme :</Label>
              <Select
                type="text"
                name="theme"
                id="theme"
                onChange={this.onChange}
                value={this.state.theme}
                required
              >
                <option value="" selected disabled hidden>
                  Choose a theme
                </option>
                <option value="ISS">ISS</option>
                <option value="Gallery">Gallery</option>
                <option value="Rover">Rover on Mars</option>
                <option value="Other">Other</option>
              </Select>
            </DivTheme>
            <DivLabel>
              <Label htmlFor="char_model">Message :</Label>
              <Textarea
                type="text"
                name="message"
                id="message"
                placeholder="Your message"
                onChange={this.onChange}
                value={this.state.message}
                required
              />
            </DivLabel>
            <StyledButton type="submit" value="Send" />
          </fieldset>
        </Formulaire>
      </Fond>
    );
  }
}
