import React, { useState, useEffect } from "react";
import Button from "./Button";
import "./time.css";
import timeService from "../services/time";
import moment from "moment/moment";

const Time = ({ city }) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    timeService.getTime(city).then((time) => {
      const formatCurrentTime = moment.unix(time).format("LTS");
      setTime(formatCurrentTime);
    });
  }, [city]);

  const handleClick = async (e) => {
    e.preventDefault();
    const currentTime = await timeService.getTime(city);
    const formatCurrentTime = moment.unix(currentTime).format("LTS");
    setTime(formatCurrentTime);
  };

  return (
    <div className="city-container">
      <div className="city-name">{city}</div>
      <div className="city-time">{time}</div>
      <div className="city-btn">
        <Button onClick={handleClick}>Refresh Time</Button>
      </div>
    </div>
  );
};

export default Time;
