import React, { useState } from "react";
import data from "../data";
import Services from "./Services";

export default function Servicehandler() {
  const [state, setstate] = useState([]);

  const handleClick = () => {
    setstate((arr) => [...arr, arr]);
  };

  return (
    <div>
      <button onClick = {}>console({state})</button>
      datas
    </div>
  );
}
