import React, { Component } from "react";
import Containerheadings from "./Containerheadings";
import './Aboutstyle.css'

class About extends Component {
  render() {
    return (
      <div>
        <div className="about">
          <Containerheadings
            head="About Us"
            para="Lorem Ipsum is simply dummy text of the printing and typesetting"
          />

          <div className="row a-full">
          <div className="col-4 a-img">
                <img src="img/a1.jpg" width="100%" />
            </div>
            <div className="col-8 a-content">
              <h1>Welcome To The Trevello Agency</h1>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris<br/><br/>
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>

              <a href="#">Book Your Trip</a>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default About;
