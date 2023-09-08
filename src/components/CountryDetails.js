import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiFillSetting } from "react-icons/ai";
import { BiMicrophone, BiArrowBack } from "react-icons/bi";
import "./CountryDetails.css";

const CountryDetails = () => {
  const { countryId } = useParams();
  const { data } = useSelector((state) => state.countries);
  const details = data.filter((country) => country.countryID === countryId)[0];
  const navigation = useNavigate();

  console.log("details:", details);

  if (!details) {
    return (
      <div>
        <p className="not-found">Country not found</p>
        <button
          type="button"
          onClick={() => navigation(-1)}
          className="back-btn"
        >
          <BiArrowBack />
        </button>
      </div>
    );
  }

  return (
    <div className="countryDetails">
      <div className="detail-nav">
      <button
          type="button"
          onClick={() => navigation(-1)}
          className="back-btn"
        >
          <BiArrowBack />
        </button>
        <h2>{details.name}</h2>
        <div className="btns">
          <BiMicrophone data-testid="microphone-button" />{" "}
          <AiFillSetting data-testid="settings-button" />{" "}
        </div>
      </div>

      <div className="flag-container">
        <img src={details.flag.png} alt={details.name} />
        <p>{details.flag.alt}</p>
      </div>

      <div className="more-details">
        <h2>{details.officialName}</h2>
        <div className="details-list">
          <h3>Capital City</h3>
          <h3>{details.capital[0]}</h3>
        </div>


        <div className="details-list">
          <h3>Region</h3>
          <h3>{details.region}</h3>
        </div>

        <div className="details-list">
          <h3>Start of Week</h3>
          <h3>{details.startOfWeek}</h3>
        </div> 

        <div className="details-list">
          <h3>Driving Side</h3>
          <h3>{details.drivingSide}</h3>
        </div>
        <div className="details-list">
          <h3>Continent</h3>
          <h3>{details.continent[0]}</h3>
        </div>
 
      </div>
    </div>
  );
};
export default CountryDetails;
