import React, {Component} from "react"; 
import "./Footer.css";
import logo from './../../logo.png';
import { Link } from 'react-router-dom';

class Footer extends Component {
  scrollToTop = event => {
    event.preventDefault();
    window.scroll({top: 0, left: 0, behavior: 'smooth' });
  };

  render(){
    return (
      <div className='footer container-fluid'>
        <div className='row'>
          <div className='col-md-10 col-md-offset-1'>
            <div className='row centered-row'>
              <div className='menu col-md-4 col-xs-12'>
                <ul className="nav navbar-nav">
                  <li><Link to='/AboutUs' exact>About us</Link></li>
                  <li><Link to='/Contact' exact>Contact</Link></li>
                  <li><a href="https://www.facebook.com/pg/brainster.co/photos/">Gallery</a></li>
                </ul>
              </div>

              <div className='col-md-4 col-xs-12  l-holder logo-holder'>
                <a href=""><img onClick={this.scrollToTop} className="img-custom-props" src={logo} alt="Brainster"/></a>
              </div>

              <div className='social-networks col-md-4 col-xs-12'>
                <p>
                  <a href="https://www.linkedin.com/school/brainster-co/" target="_blanck"><i className="icon fab fa-linkedin"></i></a>
                  <a href="https://twitter.com/BrainsterCo" target="_blanck"> <i className="icon fab fa-twitter"></i></a>
                  <a href="https://www.facebook.com/brainster.co" target="_blanck"><i className="icon fab fa-facebook"></i></a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;