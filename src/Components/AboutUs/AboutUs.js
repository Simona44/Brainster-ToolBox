import React, { Component } from "react";
import './AboutUs.css';
import Quotes from "../Quotes/Quotes";

class AboutUs extends Component {
  render() {
    return (
      <div className="about-us">
        <div className="container-fluid fixed-img">
          <div className="row opacity ">
            <Quotes />
          </div>
        </div>

        <div className="container-fluid ">
          <div className="row bg">
            <div className="us">
              <div className="col-md-4 col-xs-4 text-center">
                <h3> 15 Academies</h3>
              </div>

              <div className="col-md-4 col-xs-4 text-center">
                <h3> 100 Projects</h3>
              </div>

              <div className="col-md-4 col-xs-4 text-center">
                <h3>Thousands happy students</h3>
              </div>
            </div>
          </div>

          <div className="row aboutus-content">
            <div className="col-md-12 col-xs-12">
             <h2>Нашата визија е да го претвориме целиот град во универзитет, секој простор во училница и секој од нас во инструктор и студент.</h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutUs;