import React, { useState } from "react";
import data from "../data";
import Services from "./Services";

export default function Servicehandler() {
  const [state, setstate] = useState([]);

  const handleClick = () => {
    setstate([...data, data]);
  };

  return (
    <div>
      <button onClick = {handleClick}>console({state})</button>
      
    </div>
  );
}
