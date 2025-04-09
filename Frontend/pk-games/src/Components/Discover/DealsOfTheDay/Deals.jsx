import React from "react";
import "./Deals.css";
import DealsCard from "../DealsCard/DealsCard";

const Deals = () => {
  return (
    <div className="deals-container">
      <div className="deals-head">
        <h1>Deals of the Day</h1>
      </div>
      <div className="deals-wraper">
        <DealsCard />
      </div>
    </div>
  );
};

export default Deals;
