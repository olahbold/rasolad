import "./Components/All.css";

import Footer from "./Components/Footer";

import About from "./Components/Aboutpage/About";
import Services from "./Components/Services";
import Projects from "./Components/Projects/ Projects";
import Contact from "./Components/Contact/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbars from "./Components/Navbars";
import React, { Component } from "react"
import header from "./Components/Homepage/header";







export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {loading: false};
  }
  


  render() {
    return (
      
          
          <div>


            
             <Router>
  <Navbars />
  <Switch>
    <Route exact path="/" component={header} />
    <Route path="/about" component={About} />
    <Route path="/Services" component={Services} />
    <Route path="/Project" component={Projects} />
    <Route path="/contact" component={Contact} />
  </Switch>
  <Footer />
  </Router>
          </div>
     
      
    
  
    )
}
}