import React, { useState } from "react";
import data from "../data";
import Services from "./Services";

export default function Servicehandler() {

    const [state, setstate] = useState({data:d})
    const [data] = state

  const handleclick =() =>{
 setstate([...datas])
}

  const datas = data.map((item) => ( <Services title={item.title} content={item.content} key={item.id} />));
   



  return (
      <div>
    
   <button onClick = {handleclick}>console({state})</button>
   
    datas
    
    
    </div>
    
    );
}
