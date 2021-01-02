import "./Components/All.css";
import Footer from "./Components/Footer";
import About from "./Components/Aboutpage/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbars from "./Components/Homepage/Navbars";
import React, { Component } from "react";
import "./App.css";
import Headings from "./Components/Homepage/Headings";
import Services from "./Components/Services/Services";
import data from './Components/data'

export default function App () {
 
 
 
 
    
    

return (
      <div>
        <Router>
          <Navbars />
          <Switch>
            <Route exact path="/">
              <Headings />
            </Route>

            <Route path="/about">
              <About />
            </Route>



            <Route path="/Project">
              <Projects />
            </Route>
         
        <Route exact strict path = "/Services/:url" children = {<Services/>}/>
                
          <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  
}
