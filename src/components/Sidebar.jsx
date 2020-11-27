import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navlink = styled(Link)`
    color: white;
    list-style: none;
    text-decoration: none;`;

class Sidebar extends React.Component {
  constructor(props)  {
      super(props);
      this.state = {
          isOpen: false
      }
      this.toggleMenu = this.toggleMenu.bind(this);
     }; 

     toggleMenu () {
      const isClose = !this.state.isOpen
  this.setState({isOpen: isClose});
      };

render () {
    return (
  <Menu onStateChange={this.toggleMenu} width={ 150 } isOpen={ true } >

    <Link  className="menu-item" to="/viewiss">
      ISS
    </Link>


    <Link className="menu-item" href="/about">
      Gallery
    </Link>

    <Link className="menu-item" href="/services">
      Rover in Mars
    </Link>

    <link className="menu-item" href="/contact">
      Contact
    </link>
  </Menu>
    );
}
}

export default Sidebar;
