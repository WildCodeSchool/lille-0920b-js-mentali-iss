import React from "react";
import { slide as Menu } from "react-burger-menu";


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
