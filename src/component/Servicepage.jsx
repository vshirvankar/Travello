import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider'
const Servicepage = () => {
  return (
    <div>
    <Slider img="img/3.jpg" heading="Welcome to Service Page"/>
      <div className="about">
        <div className="row a-full">
          <div className="col-4 a-img">
            <img src="img/a1.jpg" width="100%" />
          </div>
          <div className="col-8 a-content">
            <h1>Welcome To The Servicepage</h1>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              <br />
              <br />
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>

            <a href="#">Book Your Trip</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Servicepage
