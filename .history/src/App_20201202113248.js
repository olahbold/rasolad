import './App.css';

import Footer from "./Components/Footer";
import Services from "./Components/Services";
import Navbars from './Components/Navbars'
import {Row, Col} from 'react-bootstrap'

function App() {
  return (
 <div className = 'App'>
 <Row></Row><Navbars/>
 <Services/>
 <Footer/>
 
 </div>
 
 
 
 
 
 
 
 
 
 
  );
}

export default App;
