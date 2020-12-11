i
mport "./Components/All.css";


i
mport Footer from "./Components/Footer";


i
mport About from "./Components/About";
i
mport Services from "./Components/Services";
i
mport Projects from "./Components/Projects";
i
mport Contact from "./Components/Contact";
i
mport { BrowserRouter as Router, Route, Switch } from "react-router-dom";
i
mport Navbars from "./Components/Navbars";
i
mport React, { Component } from "react"
i
mport header from "./Components/header";














e
xport default class App extends Component {
 
  

 
 
 state = {
 
 
   Loading: false  
 
 
 };
  
  
 
 componentDidMount(){
  this.setState( {Loading : !Loading})
  console.log (this.state)
}


  render() {
    return (
      
          
          <div>


            {this.state}
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