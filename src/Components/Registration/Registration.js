import React, {Component} from "react"; 
import "../Registration/Registration.css";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import {NavLink, Route, Switch} from 'react-router-dom';
import "./Registration.css";

class Registration extends Component {
  render(){
    return (
      <div className="reg-background">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <div className="reg-content   media-margin">
                <div className="form-title">
                  <br/>
                  <NavLink to='/Registration/' exact activeClassName="reg-active-title" className="form-title-link">Sign In</NavLink> or  
                  <NavLink to='/Registration/SignUp' activeClassName="reg-active-title"  className="form-title-link">Sign Up</NavLink>
                </div>
              </div>

              <Switch>
                <Route path="/Registration/" exact component={SignIn}></Route>
                <Route path="/Registration/SignUp" component={SignUp}></Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>   
    )
  }
}

export default Registration;