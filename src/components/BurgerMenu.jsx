import React from "react";
import "./BurgerMenu.css";
import SideBar from "./Sidebar";

function BurgerMenu() {
  return (
    <div id="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <div id="page-wrap">
        <h1>Click to show menu</h1>
      </div>
    </div>
  );
}

export default BurgerMenu;
