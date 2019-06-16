import React, { Component } from "react";
import "./Header.css";
import { Link, NavLink } from 'react-router-dom';
import logo from './../../logo.png';
import { slide as Menu } from 'react-burger-menu';

class Header extends Component {
  render() {
    return (
      <div className="nav-bar">
        <nav className="navbar navbar-fixed-top" role="navigation">
          <div className="container-fluid">
            <div className="row row-header"> 
              <div className="col-md-4 col-xs-4 header-left">
                <Menu>
                <NavLink to="/" exact ><img className="burger-logo" src={logo} alt="Brainster"/></NavLink>
                  <br/><br/><br/>
                  <NavLink to='/Registration' exact><li>Регистрирај се/ Најави се</li></NavLink>
                  <hr/>
                  <NavLink to='/AboutUs' exact><li>За нас</li></NavLink>
                  <hr/>
                  <a href="https://www.facebook.com/pg/brainster.co/photos/" target="_blanck" ><li className="menu-item">Галерија</li></a>
                  <hr/>
                  <NavLink to='/Contact' exact><li>Контакт</li></NavLink>
                </Menu>
                <p className="burger-text">Мени</p>
              </div>

              <div className='col-md-4 col-xs-4 logo-holder'>
                <Link to="/" exact><img className="img-custom-prop" src={logo} alt="Brainster"/></Link>
              </div>

              <div className="col-md-4 col-xs-4 header-right" >
                <a href="https://www.brainster.io/business" target="_blank" alt="">
                  <button className="yellow-btn btn btn-md">Обуки за компании</button>
                </a>
                <a href="https://www.brainster.io/business" alt="" target="_blank">
                  <button className="dark-btn btn btn-md">Вработи наши студенти</button>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header;