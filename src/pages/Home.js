import React from "react";
import NavBar from "../components/NavBar";
import Header from "../components/header/Header";
import Featured from "../components/featured/Featured";
import "./Home.css";
import PropertyList from "../components/propertyList/PropertyList";
import FeatureProperties from "../components/featureProerties/FeatureProperties";

const Home = () => {
  return (
    <>
      <NavBar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by proporty type</h1>
        <PropertyList />
        <h1 className="homeTitle">Feature properties List</h1>
        <FeatureProperties />
      </div>
    </>
  );
};
export default Home;
