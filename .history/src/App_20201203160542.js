import "./App.css";

import Footer from "./Components/Footer";
import  Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import  Projects from "./Components/Projects";
import  Contact from "./Components/Contact";
import {B}


import Navbars from "./Components/Navbars";


function App() {
  <div className="App">
    <Navbars />

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
      </div>
    </Router>
    <Services />

    <Footer />
  </div>;
}

export default App;
