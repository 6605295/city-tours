import React from "react";
import "./navbar.scss";
import logo from "../../logo.svg";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <a className="navbar-brand" href="/">
        <img src={logo} alt="alternate img" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav mr-auto">
          <a className="nav-item nav-link" href="/">
            Home <span className="sr-only">(current)</span>
          </a>
          <a className="nav-item nav-link" href="/">
            About
          </a>
          <a className="nav-item nav-link active" href="/">
            Tours
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
