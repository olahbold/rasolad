import './App.css';

import Footer from "./Components/Footer";
import data from './Components/data'
import Navbars from './Components/Navbars';
import Services from './Components/Services'




function App() {
 data.map (datas => 
    
    (
        <div className = 'App'>
        <Navbars/>
        <Services  title = {console.log(datas.title)}/>
      console.log () {} <Services/>
         
        <Footer/>
         
        </div>
         
    )
    )
 
 
 

 
 
 
 
}

export default App;
