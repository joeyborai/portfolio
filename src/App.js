import logo from './logo.svg';
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';

import { SideProjects } from './Pages/side_projects';
import { Home } from './Pages/home';
import { Resume } from './Pages/resume';

function App() {
  const [sideNavOpen, toggleSideNav] = useState(true);
  const [sideNavStyle, changeStyle] = useState({marginLeft: '15%', width: '85%'})

  function closeNav() {
    toggleSideNav(false);
    changeStyle({marginLeft: '0%', width: '100%'});
  }

  function openNav() {
    toggleSideNav(true);
    changeStyle({marginLeft: '15%', width: '85%'});
  }

  return (
    <Router>
      <div>
        { sideNavOpen &&
        <div className="sidenav">
          <button className="close-nav"><FontAwesomeIcon icon={ faTimes } className="close-symbol" onClick={ closeNav }/></button>
          <div className="sidenav-link-container">
            <Link to="/" className="sidenav-link">Home</Link>
          </div>
          <div className="sidenav-link-container">
            <Link to="/side_projects" className="sidenav-link">Side Projects</Link>
          </div>
          <div className="sidenav-link-container">
            <Link to="/resume" className="sidenav-link">Resume</Link>
          </div>
        </div>
        }

        <div className="main" style={ sideNavStyle }>
        { !sideNavOpen && <FontAwesomeIcon icon={ faBars } className="open-nav" onClick={ openNav } /> }
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/side_projects">
            <SideProjects/>
          </Route>
          <Route path="/resume">
            <Resume/>
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
