import React from "react";
import { Route, Routes } from "react-router";
import CountryDetails from "./components/CountryDetails";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/details/:countryId" element={<CountryDetails />} />
    </Routes>
  );
};

export default App;
