import React, {Component} from "react"; 
import {Link} from 'react-router-dom';
import "../Registration.css";

class SignIn extends Component {

  onSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.email.value);
    console.log(event.target.password.value);
  }

  render() {
    return (
    <div className="form-center register-form">
      <form  className="form-fields" onSubmit={this.onSubmit}>
        <div className="form-field">
          <label className="form-field-label" htmlFor="email">E-Mail Address</label>
          <input type="email" id="email" className="form-field-input" placeholder="Enter your email" name="email" />
        </div>

        <div className="form-field">
          <label className="form-field-label" htmlFor="password">Password</label>
          <input type="password" id="password" className="form-field-input" placeholder="Enter your password" name="password" />
        </div>

        <div className="form-field">
          <button className="form-field-button">Sign In</button>
          <Link to="/Registration/SignUp" className="form-field-link">Create an account</Link>
        </div>
      </form>
      </div>
    );
  }
}

export default SignIn;