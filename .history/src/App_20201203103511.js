import './App.css';

import Footer from "./Components/Footer";
import Services from "./Components/Services";
import Navbars from './Components/Navbars';
import data from './Components/data'

function App() {
  data.map (datas => {
    <Services  title = { console.log(datas.title)}  content  />
  })
  return (
 <div className = 'App'>
 <Navbars/>

     
 
 <Footer/>
 
 </div>
 
 
 
 
 
 
 
 
 
  );
}

export default App;
