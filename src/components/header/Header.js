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
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const [openDate, setOpenDate] = useState(false); //state for toggling calendar(close and open)
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const navigate = useNavigate();
  const [openOptions, setOpenOptions] = useState(false); //state for toggling options(close and open)
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  }); //state for options
  //Function for decrement or increment
  const handleOptions = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const handleSearch = () => {
    navigate("/hotels", { state: { date, destination, options } });
  };
  return (
    <>
      <div className="header">
        <div
          className={
            type === "list" ? "headerContainer listMode" : "headerContainer"
          }
        >
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
          {type !== "list" && (
            <>
              <h1 className="headerTitle">A liftime of Discount? Its Genius</h1>
              <p className="headerDesc">
                Get rewarded for your travel unlock instant saving 10% or more
                with Gomis-booking account
              </p>
              <button className="headerButton">Sign in/Register</button>
              <div className="headerSearch">
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faBed} className="headerIcons" />
                  <input
                    type="text"
                    placeholder="where aregoing ?"
                    className="headerSearchInput"
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
                <div className="headerSearchItem">
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="headerIcons"
                  />
                  <span
                    onClick={() => setOpenDate(!openDate)}
                    className="headerSearchText"
                  >
                    {/*calendar configuration for start and endDate*/}
                    Du{" "}
                    {`${format(date[0].startDate, "dd/MM/yyyy")}.   Au
                  ${format(date[0].endDate, "dd/MM/yyyy")} `}
                  </span>
                  {openDate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      className="date"
                      minDate={new Date()}
                    />
                  )}
                </div>
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faPerson} className="headerIcons" />
                  <span
                    onClick={() => setOpenOptions(!openOptions)}
                    className="headerSearchText"
                  >
                    {`${options.adult} adult(s) . ${options.children} children(s) . ${options.room} room(s).`}
                  </span>
                  {openOptions && (
                    <div className="options">
                      <div className="optionItem">
                        <span className="optionText">Adult</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.adult <= 1}
                            onClick={() => handleOptions("adult", "d")}
                            className="optionCounterButton"
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.adult}
                          </span>
                          <button
                            onClick={() => handleOptions("adult", "i")}
                            className="optionCounterButton"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">Children</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.children <= 0}
                            onClick={() => handleOptions("children", "d")}
                            className="optionCounterButton"
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.children}
                          </span>
                          <button
                            onClick={() => handleOptions("children", "i")}
                            className="optionCounterButton"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">Room</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.room <= 1}
                            onClick={() => handleOptions("room", "d")}
                            className="optionCounterButton"
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.room}
                          </span>
                          <button
                            onClick={() => handleOptions("room", "i")}
                            className="optionCounterButton"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="headerSearchItem">
                  <button
                    onClick={() => handleSearch()}
                    className="headerButton"
                  >
                    {" "}
                    Search
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default Header;
