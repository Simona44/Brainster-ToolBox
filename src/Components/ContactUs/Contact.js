import React, { Component } from "react";
import "./Contact.css"
import contact1 from './../../images/contacts/contact1.png';
import contact2 from './../../images/contacts/contact2.png';
import contact3 from './../../images/contacts/contact3.png';

class Contact extends Component {
  render() {
    return (
      <div className="about-us">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-md-offset-4 text-center">
              <h2 className="team">Our Team</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 col-md-offset-2 row-team">
              <div className="center-div row">
                <div className="col-md-4 col-xs-4 first">
                  <img src={contact1} className="team-img" alt="" />
                  <p className="position">CEO<br/>Michael</p>
                </div>
                <div className="col-md-4 col-xs-4">
                  <img src={contact2} className="team-img second" alt="" />
                  <p className="position">CMO<br/>Alex</p>
                </div>
                <div className="col-md-4 col-xs-4">
                  <img src={contact3} className="team-img third" alt="" />
                  <p className="position">CFO<br/>Monika</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="message container-fluid">
          <div className="row">
            <div className="center-div col-md-10 col-xs-10 col-md-offset-1">
              <h2 className="message-content">We decided to follow our passion and make the jump.</h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;