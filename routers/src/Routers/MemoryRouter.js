//MemoryRouter
// Memory router keeps the URL changes in memory not in the user browsers. It keeps the history of the URL in memory
// (does not read or write to the address bar so the user can not use the browser’s back button as well as the forward button.)
// It doesn’t change the URL in your browser. It is very useful for testing and non-browser environments like React Native.

import React from "react";
import { MemoryRouter as Router, Route, Link, Switch } from "react-router-dom";

import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";

const MemoryRouter = () => {
  return (
    <Router>
      <div className="app">
        <ul className="app-header">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
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

export default MemoryRouter;
