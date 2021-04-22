import logo from './logo.svg';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { SideProjects } from './Pages/side_projects';
import { Home } from './Pages/home';
import { Resume } from './Pages/resume';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/side_projects">Side Projects</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
          </ul>
        </nav>

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
    </Router>
  );
}

export default App;
