import React, { useEffect, useState } from "react";
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

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  const filteredCountryData = countryData.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="countriesList">
      <input
        className="search-input"
        type="text"
        placeholder="Search countries..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul className="clists">
        {filteredCountryData.map((country) => (
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
