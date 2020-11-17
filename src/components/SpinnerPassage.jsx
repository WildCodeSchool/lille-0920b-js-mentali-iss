/* eslint-disable prettier/prettier */
import React from 'react';
import spinner from '../assets/spinner.gif';

// eslint-disable-next-line prettier/prettier
const Spinner = () => {
  return (
    <img
      src={spinner}
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt="Loading"
    />
  );
};

export default Spinner;
