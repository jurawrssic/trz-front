import React from "react";

import logo from "./../assets/logo1.png";
import register from "./../assets/register.png";
import trade from "./../assets/trade4.png";
import location from "./../assets/loc1.png";
import report from "./../assets/report2.png";
import { Link } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";

function Navigation() {
  return (
    <>
      <Link to="/" className="nav-fixed">
        <img className="app-logo" src={logo} alt="Zombie Resident" />
      </Link>
      <Nav vertical pills className="nav-spacing">
        <NavItem className="mt-4">
          <Link to="/register">
            <img className="nav-icons" src={register} alt="Register img" />
            Register
          </Link>
        </NavItem>
        <NavItem className="mt-4">
          <Link to="/updateLocation">
            <img className="nav-icons" src={location} alt="Location img" />
            Update Location
          </Link>
        </NavItem>
        <NavItem className="mt-4">
          <Link to="/trade">
            <img className="nav-icons" src={trade} alt="Trade img" />
            Trade
          </Link>
        </NavItem>
        <NavItem className="mt-4">
          <Link to="/reportInfected">
            <img className="nav-icons" src={report} alt="Report img" />
            Report
          </Link>
        </NavItem>
      </Nav>
    </>
  );
}

export default Navigation;
