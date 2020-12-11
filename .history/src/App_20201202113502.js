import './App.css';

import Footer from "./Components/Footer";
import Services from "./Components/Services";
import Navbars from './Components/Navbars'

function App() {
  return (
 <div className = 'App'>
 <Row><Col><Navbars/></Col></Row>

 <Row><Col><Services/>
 </Col></Row>
 <Footer/>
 
 </div>
 
 
 
 
 
 
 
 
 
  );
}

export default App;
