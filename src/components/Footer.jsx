import React from "react";
import logo from "../images/logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="flex">
          <div className="left">
            <img src={logo} alt="" />
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

          <div className="social-media">
            <ul>
              <li>
                <i class="fab fa-facebook"></i>
              </li>
              <li>
                <i class="fab fa-twitter"></i>
              </li>
              <li>
                <i class="fab fa-pinterest"></i>
              </li>
              <li>
                <i class="fab fa-instagram"></i>
              </li>
            </ul>

            <p>&copy; 2021 Loopstudios. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
