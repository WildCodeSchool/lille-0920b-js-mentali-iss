import React from "react";
import { slide as Menu } from "react-burger-menu";

function Sidebar(props) {
  return (
    <Menu width={ 150 } {...props}>
      <a className="menu-item" href="/">
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
};

export default Sidebar;