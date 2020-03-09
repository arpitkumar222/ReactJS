import React, { createContext } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Contect from "./contect";

const Render = () => {
  return (
    <Router>
      <div>
        <nav className="nav">
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/page2"}>About</Link>
            </li>
            <li>
              <Link to={"/page3"}>Contect</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/page2" component={About} />
          <Route path="/page3" component={Contect} />
        </Switch>
      </div>
    </Router>
  );
};

export default Render;
