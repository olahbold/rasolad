import "./Components/All.css";
import Footer from "./Components/Footer";
import About from "./Components/Aboutpage/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbars from "./Components/Homepage/Navbars";
import React, { Component } from "react";
import Servicehandler from "./Components/Services/Servicehandler";
import "./App.css";
import headings from "./Components/Homepage/headings";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }

  render() {
    return (
      <div>
        <Router>
          <Navbars />
          <Switch>
            <Route  path="/">
              <headings
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/Services">
              <Servicehandler />
            </Route>

            <Route path="/Project">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}
