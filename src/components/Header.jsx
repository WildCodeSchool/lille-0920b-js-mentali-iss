import React from 'react';
import styled from 'styled-components';

const Headercont = styled.header
` position: absolute;
  left: 0px;
  top: 0px;
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #34263a;
  box-shadow: 0px 5px 5px #34263a;
  `  
const LogoMentali = styled.a
  `display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  width: 400px;
  height: auto;
  `
const LogoISS = styled.img 
  `width: 150px;
  height: auto;
  margin: 10px 20px 10px 10px;
  text-decoration: none`

const Brand = styled.h2
  `color: white;
  font-size: 35px;`

  const Navbar = styled.ul
    `list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 1900px;
    height: auto;
    background-color: #34263a;
    `
const Navlink = styled.a
    ` text-decoration: none;
      font-size: 35px;
      color: white;
      &:hover {
        color: #3366cc;
        text-decoration: none;
      }
    `
  const Header = () => {
    return (
      <Headercont>
        <div className="logo-iss">
          <LogoMentali href="#1">
            <LogoISS src="/photos/logoISS.jpg" alt="logo" />
            <Brand>MENTAL-ISS</Brand>
          </LogoMentali>
        </div>
        <Navbar>
          <Navlink href="#2">
            <li>ISS</li>
          </Navlink>
          <Navlink href="#2">
            <li>Galerie</li>
          </Navlink>
          <Navlink href="#2">
            <li>Rover sur Mars</li>
          </Navlink>
          <Navlink href="#2">
            <li>Contact</li>
          </Navlink>
        </Navbar>
      </Headercont>
    );
  };
  
export default Header;
