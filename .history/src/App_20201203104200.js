import './App.css';

import Footer from "./Components/Footer";
import Services from "./Components/Services";
import Navbars from './Components/Navbars';
import data from './Components/data'

function App() {
 const hel  data.map (datas => {
    <Services  title = { console.log(datas.title)}  content = {console.log(datas.content)} />
  })
  return (
 <div className = 'App'>
 <Navbars/>

     
 
 <Footer/>
 
 </div>
 
 
 
 
 
 
 
 
 
  );
}

export default App;
