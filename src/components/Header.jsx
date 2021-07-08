import React from "react";
import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";
const Header = () => {
  const handleOpen = () => {
    const header = document.querySelector("header");
    header.classList.toggle("open");
  };

  const handleClose = () => {
    const header = document.querySelector("header");
    header.classList.toggle("open");
  };
  return (
    <header>
      <div className="container">
        <nav>
          <img src={logo} alt="logo" />

          <img
            onClick={handleOpen}
            className="hamburger"
            src={hamburger}
            alt="hamburger"
          />
          <img
            onClick={handleClose}
            className="close"
            src={close}
            alt="close"
          />

          <div>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="text-container">
          <h1>Immersive experiences that deliver</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
