import React, { useState } from "react";
import data from "../data";
import Services from "./Services";

export default function Servicehandler() {
  const [state, setstate] = useState([...datadata]);

  const handleClick = () => {
    setstate( 
        [...data,{data:data}]);
  };

  return (
    <div>
      <button onClick = {handleClick}>clickme</button>
      {state}
    </div>
  );
}
