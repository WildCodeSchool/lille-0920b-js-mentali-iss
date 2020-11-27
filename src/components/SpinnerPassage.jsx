import React from "react";
import spinner from "../assets/spinner.gif";

const Spinner = () => {
  return (
    <img
      src={spinner}
      style={{ width: "20vw", margin: "auto", display: "block" }}
      alt="Loading"
    />
  );
};

export default Spinner;
