import React, { Component } from "react";
import "./Tripstyle.css";
import Containerheadings from "./Containerheadings";


const  Tripscontent = [
  {
    pic:"img/t1.jpg",
    heading: "Australia",
    para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
  },

  {
    pic:"img/t2.jpg",
    heading: "India",
    para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
  },
  {
    pic:"img/t3.jpg",
    heading: "England",
    para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
  }
]



class Trip extends Component {
  render() {
    return (
      <div>
        <div className="trip">
      <Containerheadings head="Our Trip" para="Lorem Ipsum is simply dummy text of the printing and typesetting"/>
          {/* <div className="title">
            <h1>Our Trip</h1>
            <p>
              Lorem Ipsum is simply dummy text of the <br /> printing and
              typesetting
            </p>
          </div> */}
          
          <div className="row">
        {Tripscontent.map((item,index) => {
          return(
            <div className="col-4 t1" key={index}>
              <img src={item.pic} width="100%" />
              <h1>{item.heading}</h1>
              <p>
                {item.para}
              </p>
              <a href="#">Book Your Trip</a>
            </div>
          )
        })}

           

           
          </div>
        </div>
      </div>
    );
  }
}

export default Trip;
