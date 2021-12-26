// Browser Router:
// It uses HTML 5 history API (i.e. pushState, replaceState and popState API) to keep your UI in sync with the URL.
// It routes as a normal URL in the browser and assumes that the server is handling all the request URL (eg., /, /about)
// and points to root index.htm

import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";

const BrowserRouter = () => {
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

export default BrowserRouter;
