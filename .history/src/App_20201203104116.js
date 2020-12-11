import './App.css';

import Footer from "./Components/Footer";
import Services from "./Components/Services";
import Navbars from './Components/Navbars';
import data from './Components/data'

function App() {
  
  
  
  return (
 <div className = 'App'>
 <Navbars/>

   data.map (datas => {
  <Services  title = { console.log(datas.title)}  content = {console.log(datas.content)} />
})  
 
 <Footer/>
 
 </div>
 
 
 
 
 
 
 
 
 
  );
}

export default App;
