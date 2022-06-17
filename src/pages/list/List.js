import React from "react";
import "./List.css";
import NavBar from "../../components/NavBar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {
  const location = useLocation();

  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);

  return (
    <>
      <NavBar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lstTitle">Search</h1>
            <div className="lsItem">
              <label htmlFor="">Destination</label>
              <input type="text" />
            </div>
            <div className="lsItem">
              <label htmlFor=""> Checking Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                Du{" "}
                {`${format(date[0].startDate, "dd/MM/yyyy")}.   Au
            ${format(date[0].endDate, "dd/MM/yyyy")} `}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label htmlFor="">Options</label>
              <div className="lsOptions">
                <div className="lsOptionsItems">
                  <span className="lsOptionsText">
                    Min price <small>Per night</small>
                  </span>
                  <input type="number" className="lsOptionsInput" />
                </div>
                <div className="lsOptionsItems">
                  <span className="lsOptionsText">
                    Max price <small>Per night</small>
                  </span>
                  <input type="number" className="lsOptionsInput" />
                </div>
                <div className="lsOptionsItems">
                  <span className="lsOptionsText">
                    Adult <small>Per night</small>
                  </span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionsInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionsItems">
                  <span className="lsOptionsText">
                    Children <small>Per night</small>
                  </span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionsInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionsItems">
                  <span className="lsOptionsText">
                    Room <small>Per night</small>
                  </span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionsInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResults">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </>
  );
};
export default List;
