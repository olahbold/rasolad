import "./Components/All.css";

import Footer from "./Components/Footer";

import About from "./Components/About";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbars from "./Components/Navbars";
import React, { Component } from "react"
import header from "./Components/header";







export default class App extends Component {
  
  state = {
    Loading: false  
  };
  
  componentDidMount(){
  this.setState( {Loading : !Loading})
  console.log (this.state)
}
const classes = useStyles();

  render() {
    return (
      <div>
      <Router>
        <div>
          <Navbars />
          <Switch>
            <Route exact path="/" component={header} />
            <Route path="/about" component={About} />
            <Route path="/Services" component={Services} />
            <Route path="/Project" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <Footer />
          {this.state ? import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function CircularIndeterminate() {
  

  return (
    <div className={classes.root}>
      <CircularProgress />
    
    </div>
  );
}
}
        </div>
      </Router>
      </div>
    );
  }
}
