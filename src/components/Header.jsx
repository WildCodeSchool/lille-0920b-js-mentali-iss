import React from "react";
import styled from "styled-components";
import BurgerMenu from"./BurgerMenu";

const size = {
  xs: '320px',
  sm: '768px',
  lg: '1200px',
 };

const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  lg: `(min-width: ${size.lg})`,
 };

const Headercont = styled.header`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 99.2vw;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #34263a;
  box-shadow: 0px 5px 5px #34263a;
  position: sticky;
  z-index: 10000;
  overflow-x: hidden;
  @media ${device.xs} {
    width: 100vw;
    }
  @media ${device.sm} {
    width: 100vw;
    height: 12vh;
    }
  `;

const LogoMentali = styled.a`
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  width: 40vw;
  height: auto; 
  @media ${device.xs} {
    width: 80vw;;
    }
`;

const LogoISS = styled.img`
  width: 10vw;
  height: auto;
  margin: 10px 20px 10px 10px;
  text-decoration: none;
  @media ${device.xs} {
  width: 15vw;
    }
  `;

const Brand = styled.h2`
  color: white;
  font-size: 35px;
  &:hover {
    color: #3366cc;
    text-decoration: none;
  };
  @media ${device.xs} {
    font-size: 10px;
    }
  @media ${device.sm} {
    font-size: 25px;;
    }`;

const Navbar = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 50vw;
  height: auto;
  background-color: #34263a;
  @media ${device.xs} {
    display: none;
  }`;

const Navlink = styled.a`
  text-decoration: none;
  font-size: 35px;
  color: white;
  &:hover {
    color: #3366cc;
    text-decoration: none;
  }
  @media ${device.sm} {
  font-size: 25px;
  margin-right: 10px;
    }
  @media ${device.sm} {
  margin-right: 10px;
  }
`;

const Burger = styled.div `
  @media ${device.lg} {
  display: none
    }`

const Header = () => {
  return (
    <Headercont>
      <div className="logo-iss">
        <LogoMentali href="#1">
          <LogoISS src="/photos/world.png" alt="logo" />
          <Brand>MENTAL-ISS</Brand>
        </LogoMentali>
      </div>
      <Burger>
         <BurgerMenu  />
      </Burger>
      <Navbar>
        <Navlink href="#2">
          <li>ISS</li>
        </Navlink>
        <Navlink href="#2">
          <li>Gallery</li>
        </Navlink>
        <Navlink href="#2">
          <li>Rover on Mars</li>
        </Navlink>
        <Navlink href="#2">
          <li>Contact</li>
        </Navlink>
      </Navbar>
    </Headercont>

  );
};

export default Header;