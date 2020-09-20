import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="nav-wrapper N/A transparent

    "
    >
      <div className="container">
        <img
          className="brand-logo"
          src="balloon.svg"
          height="50px"
          width="60px"
        ></img>
        <ul className="right">
          <li>
            <NavLink className="black-text" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="black-text" to="/Donate">
              Donate
            </NavLink>
          </li>
          <li>
            <NavLink className="black-text" to="/Information">
              Information
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
