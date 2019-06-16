import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import GameList from './Components/GameList/GameList';
import Footer from './Components/Footer/Footer';
import SinglePage from './Components/SinglePage/SinglePage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ErrorPage from './Components/ErrorPage/ErrorPage';
import AboutUs from './Components/AboutUs/AboutUs';
import Scrolltotop from './Components/Scrolltotop';
import Contact from './Components/ContactUs/Contact';
import Registration from './Components/Registration/Registration';

function App() {
  return (
    <div>
      <Router>
				<Scrolltotop>
          <div className="App">
            <Header/>
              <Switch>
                <Route exact path="/" component={GameList} />
                <Route path="/SinglePage/:id" component={SinglePage} />
                <Route exact path="/AboutUs"  component={AboutUs} />
                <Route path="/Contact" component={Contact} />
                <Route path="/Registration" component={Registration} />
                <Route exact path="*" component={ErrorPage} />
              </Switch>
            <Footer/>
          </div>
        </Scrolltotop>
			</Router>
    </div>
  );
}

export default App;
