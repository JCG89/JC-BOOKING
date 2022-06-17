import React from "react";
import "./MailList.css";

const MailList = () => {
  return (
    <>
      <div className="mail">
        <h1 className="mailTitle"> Save Time, save money!</h1>
        <span className="description">
          Sign up and we'll send the best deal for you !
        </span>
        <div className="mailContainer">
          <input
            type="text"
            placeholder="Your email"
            className="mailContainerInput"
          />
          <button>Suscribe</button>
        </div>
      </div>
    </>
  );
};
export default MailList;
