import React from "react";
import "./Header.css";
import { useState } from "react";
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";

const Header = () => {
  const [openDate, setOpenDate] = useState(false); //state for toggling calendar
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  }); //state for options
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
              <span
                onClick={() => setOpenDate(!openDate)}
                className="headerSearchText"
              >
                {/*calendar configuration for start and endDate*/}
                Du{" "}
                {`${format(date[0].startDate, "dd/MM/yyyy")}   Au
                  ${format(date[0].endDate, "dd/MM/yyyy")} `}
              </span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                />
              )}
            </div>
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faPerson} className="headerIcons" />
              <span className="headerSearchText">
                {`${options.adult} adult . ${options.children} children . ${options.room} room.`}
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
