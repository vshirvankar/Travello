import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Navbarstyle.css'

const Menuitem = [
    {
      title: "Home",
      url: "/",
      icon: "fa-solid fa-house-user",
      cname: "nav-link",
    },
    {
      title: "About",
      url: "/about",
      icon: "fa-solid fa-user",
      cname: "nav-link",
    },
    {
      title: "Service",
      url: "/service",
      icon: "fa-brands fa-stack-overflow",
      cname: "nav-link",
    },
    {
      title: "Department",
      url: "/department",
      icon: "fa-solid fa-layer-group",
      cname: "nav-link",
    },
    {
      title: "Contact",
      url: "/contact",
      icon: "fa-sharp fa-solid fa-address-book",
      cname: "nav-link",
    },
  ];

class Navbar extends Component {
   
  render() {
    return (
      <div className="nav">
        <div className="navbar">
          <div className="row">
            <div className="col-4 logo">
              <h1>Trevello</h1>
            </div>

            <div className="col-8 menu">
            <ul >
              {Menuitem.map((item,index) => {
                return(
                    <li key={index}><i className={item.icon}></i><Link to={item.url} refresh="true" className={item.cname}>{item.title}</Link></li>
                )
              })}
              

              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
