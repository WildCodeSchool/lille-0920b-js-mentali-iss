import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    const isClose = !this.state.isOpen;
    this.setState({ isOpen: isClose });
  }

  render() {
    return (
      <Menu onStateChange={this.toggleMenu} width={150} isOpen={true}>
        <Link className="menu-item" to="/viewiss">
          ISS
        </Link>
        <Link className="menu-item" to="/gallery">
          Gallery
        </Link>
        <Link className="menu-item" to="/roveronmars">
          Rover in Mars
        </Link>
        <Link className="menu-item" to="/contact">
          Contact
        </Link>
      </Menu>
    );
  }
}

export default Sidebar;
