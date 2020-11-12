import React from "react";
import { slide as Menu } from "react-burger-menu";


class Sidebar extends React.Component {
  constructor(props)  {
      super(props);
      this.state = {
          isOpen: false
      }
      this.isMenuOpen = this.isMenuOpen.bind(this);
     }; 

     isMenuOpen () {
      const isClose = !this.state.isOpen
  this.setState({isOpen: isClose});
      };

render () {
  console.log(this.state.isOpen)
    return (
  <Menu onStateChange={this.isMenuOpen} width={ 150 } isOpen={ true } >
    <a  className="menu-item" href="/">
      ISS
    </a>

    <a className="menu-item" href="/about">
      Gallery
    </a>

    <a className="menu-item" href="/services">
      Rover in Mars
    </a>

    <a className="menu-item" href="/contact">
      Contact
    </a>
  </Menu>
    );
}
}

export default Sidebar;