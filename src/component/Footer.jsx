import React, { Component } from "react";
import "./Footerstyle.css";

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer-container">
          <div className="row footer">
            <div className="col-3 f-link">
              <h2>About</h2>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div class="col-3 f-link">
            <h2>Links</h2>
              <ul>
                <li>
                  <i class="fa-solid fa-house-user"></i>
                  <a href="/" class="nav-link"></a>Home
                </li>
                <li>
                  <i class="fa-solid fa-user"></i>
                  <a href="/" class="nav-link"></a>About
                </li>
                <li>
                  <i class="fa-brands fa-stack-overflow"></i>
                  <a href="/" class="nav-link"></a>Service
                </li>
                <li>
                  <i class="fa-solid fa-layer-group"></i>
                  <a href="/" class="nav-link"></a>Department
                </li>
                <li>
                  <i class="fa-sharp fa-solid fa-address-book"></i>
                  <a href="/" class="nav-link"></a>Contact
                </li>
              </ul>
            </div>

            <div class="col-3 f-link">
            <h2>Department</h2>
              <ul>
                <li>
                  <i class="fa-solid fa-house-user"></i>
                  <a href="/" class="nav-link"></a>Home
                </li>
                <li>
                  <i class="fa-solid fa-user"></i>
                  <a href="/" class="nav-link"></a>About
                </li>
                <li>
                  <i class="fa-brands fa-stack-overflow"></i>
                  <a href="/" class="nav-link"></a>Service
                </li>
                <li>
                  <i class="fa-solid fa-layer-group"></i>
                  <a href="/" class="nav-link"></a>Department
                </li>
                <li>
                  <i class="fa-sharp fa-solid fa-address-book"></i>
                  <a href="/" class="nav-link"></a>Contact
                </li>
              </ul>
            </div>

            <div className="col-3 f-link">
              <h2>Contact</h2>
              <ul>
                <li>
                  <i class="fa-solid fa-house-user"></i>
                  <a href="/" class="nav-link"></a> New York, NY 10012, US
                </li>
                <li>
                  <i class="fa-solid fa-user"></i>
                  <a href="/" class="nav-link"></a>info@example.com
                </li>
                <li>
                  <i class="fa-brands fa-stack-overflow"></i>
                  <a href="/" class="nav-link"></a> + 01 234 567 88
                </li>
                <li>
                  <i class="fa-solid fa-layer-group"></i>
                  <a href="/" class="nav-link"></a> + 01 234 567 88
                </li>
                
              </ul>
            </div>
          </div>
          
          <div className="row">
            <div className="col-12 f-design">
                <p>© 2023 Copyright:designed by vivek Shirvankar</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
