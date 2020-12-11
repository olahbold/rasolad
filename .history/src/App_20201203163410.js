import "./App.css";
import React from "react";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbars from "./Components/Navbars";

import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      
      <Router>
        <div>
          <Navbars />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/Services" component={Services} />
            <Route path="/Project" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
