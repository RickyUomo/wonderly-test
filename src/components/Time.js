import React from "react";
import Button from "./Button";
import "./time.css";

const Time = ({ city, time }) => {
  return (
    <div className="city-container">
      <div className="city-name">{city}</div>
      <div className="city-time">{time}</div>
      <div className="city-btn">
        <Button>Refresh Time</Button>
      </div>
    </div>
  );
};

export default Time;
