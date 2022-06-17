import React from "react";
import "./SearchItem.css";

const SearchItem = () => {
  const myPicture =
    "https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1";
  return (
    <>
      <div className="searchItem">
        <img src={myPicture} alt="room" className="siImg" />
        <div className="siDesc">
          <h1 className="siTitle"> tower street apartements</h1>
          <p className="siDistance"> 500m from center</p>
          <span className="siTaxiOp">Free Airport Taxi</span>
          <span className="siSubtitle">
            Studio Appartement with Air conditionning
          </span>
          <span className="siFeatures">
            Entire studio. 1 bathroom , 21m² 1 full bed
          </span>
          <span className="siCancelOp">Free cancelation</span>
          <span className="siCancelOpSubtitle">
            {" "}
            You can cancel later so lock in this great price
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
          </div>
          <div className="siDetailText">
            <span className="siPrice">$123</span>
            <span className="siTaxop">Includes taxes and fees</span>
            <button className="siCheckButton">See availability</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchItem;
