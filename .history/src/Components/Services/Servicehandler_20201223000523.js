import React, { useState } from "react";
import data from "../data";
import Services from "./Services";

export default function Servicehandler() {

    const [state, setstate] = useState([])

handleclick(){
 s

}

  const datas = data.map((item) => ( <Services title={item.title} content={item.content} key={item.id} />));
   



  return (
      
    
    
    
    (datas)
    
    
    
    
    );
}
