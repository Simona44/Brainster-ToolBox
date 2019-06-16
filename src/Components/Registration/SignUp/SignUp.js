import React, {Component} from "react"; 
import {Link} from 'react-router-dom';
import "../Registration.css";

class SignUp extends Component {

  onSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.password.value);
    console.log(event.target.company.value);
    console.log(event.target.email.value);
    console.log(event.target.phone.value);
    console.log(event.target.employees.value);
    console.log(event.target.sector.value);
    console.log(event.target.comment.value);
  }

  render() {
    return (
    <div className="form-center register-form">
      <form className="form-fields" onSubmit={this.onSubmit}>
        <div className="form-field">
          <label className="form-field-label" htmlFor="Name">Full Name</label>
          <input type="text" id="name" className="form-field-input" placeholder="Enter your full name" name="name" />
        </div>

        <div className="form-field">
          <label className="form-field-label" htmlFor="password">Password</label>
          <input type="password" id="password" className="form-field-input" placeholder="Enter your password" name="password" />
        </div>

        <div className="form-field">
          <label className="form-field-label" htmlFor="Name">Company</label>
          <input type="text" id="company" className="form-field-input" placeholder="Enter company's name" name="company" />
        </div>

        <div className="form-field">
          <label className="form-field-label" htmlFor="E-Mail">E-Mail Address</label>
          <input type="email" id="email" className="form-field-input" placeholder="Enter your email" name="email" />
        </div>

        <div className="form-field">
          <label className="form-field-label" htmlFor="Phone">Phone number</label>
          <input type="phone" id="phone" className="form-field-input" placeholder="Enter phone number" name="phone" />
        </div>

        <div className="form-field">
          <label className="form-field-label" htmlFor="Select">Number of employees</label>
          <select type="Select" id="employees" className="form-field-input" placeholder="Select number of employees" name="employees">
            <option disabled selected value> -- select an option -- </option>
            <option value="50employees">50</option>
            <option value="100employees">100</option>
            <option value="200employees">200</option>
          </select>
        </div>

        <div className="form-field">
          <label className="form-field-label" htmlFor="Select">Sector</label>
          <select type="Select" id="sector" className="form-field-input" placeholder="Choose sector" name="employees">
            <option disabled selected value> -- select an option -- </option>
            <option value="human-resources">Human resources</option>
            <option value="marketing">Marketing</option>
            <option value="product">Product</option>
            <option value="sales">Sales</option>
            <option value="seo">SEO</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-field">
          <label className="form-field-label" htmlFor="Text">Comment</label>
          <textarea type="text" id="comment" className="form-field-input" placeholder="Enter additional comment" name="text" />
        </div>

        <div className="form-field">
          <button className="form-field-button">Sign Up</button>
          <Link to="/Registration/" className="form-field-link">I'm already member</Link>
        </div>
      </form>
      </div>
    );
  }
}

export default SignUp;