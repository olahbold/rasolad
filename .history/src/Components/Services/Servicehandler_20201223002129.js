import React, { useState } from "react";
import data from "../data";
import Services from "./Services";

export default function Servicehandler() {

    const [state, setstate] = useState({Data:data})
    const [data] = state




   



  return (
      <div>
    
   <button onClick = {handleclick}>console({state})</button>
   
    datas
    
    
    </div>
    
    );
}
