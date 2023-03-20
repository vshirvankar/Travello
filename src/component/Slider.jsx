import React, { Component } from "react";
import "./SliderStyle.css";


class Slider extends Component {
  constructor(){
    super();
    
  }
  render() {
    return (
      <div>
        <div className="slider">
          <img src={this.props.img} />
          <div className="row">
            <div className="col-12 slider-content">
              <h1>{this.props.heading}</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting<br/>
                industry. Lorem Ipsum has been the industry's standard dummy.
                
              </p>
              <a href="#">Book Your Trip</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
