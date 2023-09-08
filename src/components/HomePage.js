import React, { useState } from 'react';
import CountryList from './CountryList';
import './HomePage.css';
import NavBar from './navBar';

const HomePage = () => {
 
  return (
    <div className="main">
      <NavBar />
      <div className="country">
        <CountryList />
      </div>
    </div>
  );
};

export default HomePage;