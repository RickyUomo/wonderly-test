import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const Navbar = () => {
  const [click, setclick] = useState(false);

  const handleClick = () => setclick(!click);

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo">
            Wonderly Time
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/london" className="nav-link">
                London
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/paris" className="nav-link">
                Paris
              </Link>
            </li>
            <li className="nav-item">
              <Link to="rome" className="nav-link">
                Rome
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Navbar;
