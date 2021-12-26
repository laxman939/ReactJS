// Hash Router:
// Hash router uses client-side hash routing. It uses the hash portion of the URL (i.e. window.location.hash)
// to keep your UI in sync with the URL. Hash portion of the URL won’t be handled by the server, the server
// will always send the index.html for every request and ignore the hash value. Not recommended to use.

import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";

import React from "react";

import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";

const HashRouter = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/contact" component={Contact}></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default HashRouter;
