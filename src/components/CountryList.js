import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountryData } from "../Redux/countries/countriesSlice";
import { NavLink } from "react-router-dom";

const CountryList = () => {
  const dispatch = useDispatch();
  const countryData = useSelector((state) => state.countries.data);
  const isLoading = useSelector((state) => state.countries.isLoading);

  useEffect(() => {
    dispatch(fetchCountryData());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="countriesList">
      <ul className="clists">
        {countryData.map((country) => (
          <li className="listss" key={country.countryID}>
            <NavLink to={`/details/${country.countryID}`}>
            <img src={country.flag.png} alt={country.name} />
            <h2 className="name">{country.name}</h2>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
