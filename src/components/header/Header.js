import React from "react";
import "./Header.css";
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="headerContainer">
          <div className="headerList">
            <div className="headerListItems active">
              <FontAwesomeIcon icon={faBed} />
              <span>Stays</span>
            </div>
            <div className="headerListItems">
              <FontAwesomeIcon icon={faPlane} />
              <span>Flights</span>
            </div>
            <div className="headerListItems">
              <FontAwesomeIcon icon={faCar} />
              <span>Car rentals</span>
            </div>
            <div className="headerListItems">
              <FontAwesomeIcon icon={faBed} />
              <span>Attractions</span>
            </div>
            <div className="headerListItems">
              <FontAwesomeIcon icon={faTaxi} />
              <span>Airport Taxis</span>
            </div>
          </div>
          <h1 className="headerTitle">A liftime of Discount? Its Genius</h1>
          <p className="headerDesc">
            Get rewarded for your travel unlock instant saving 10% or more with
            Gomis-booking account
          </p>
          <button className="headerButton">Sign in/Register</button>
          <div className="headerSearch">
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faBed} className="headerIcons" />
              <input
                type="text"
                placeholder="where aregoing ?"
                className="headerSearchInput"
              />
            </div>
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faCalendarDays} className="headerIcons" />
              <span className="headerSearchText">date to date</span>
            </div>
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faPerson} className="headerIcons" />
              <span className="headerSearchText">
                2 adultes 2 childrens room
              </span>
            </div>
            <div className="headerSearchItem">
              <button className="headerButton"> Search</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
