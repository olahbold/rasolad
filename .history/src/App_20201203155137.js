import "./App.css";

import Footer from "./Components/Footer";

import Navbars from "./Components/Navbars";
import Services from "./Components/Services";

function App() {
  <div className="App">
    <Navbars />

    <Router>
      <div>
        <Navbars />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/" component={Services} />
          <Route path="/contact" component={Contactus} />
        </Switch>
      </div>
    </Router>
    <Services />

    <Footer />
  </div>;
}

export default App;
