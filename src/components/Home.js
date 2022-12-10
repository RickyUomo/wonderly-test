import React from "react";
import Typical from "react-typical";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome To Wonderly Time</h1>
      <p>
        Get live{" "}
        <Typical
          steps={["London", 1500, "Paris", 1500, "Rome", 1500]}
          loop={Infinity}
          wrapper="b"
        />
        time
      </p>
    </div>
  );
};

export default Home;
