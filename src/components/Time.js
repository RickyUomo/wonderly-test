import React from "react";
import Button from "./Button";

const Time = ({ city, time }) => {
  return (
    <div>
      <div className="city">{city}</div>
      <div className="city-time">{time}</div>
      <Button>Refresh Time</Button>
    </div>
  );
};

export default Time;
