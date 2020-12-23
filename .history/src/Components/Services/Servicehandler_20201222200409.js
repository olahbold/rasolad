import React, { useState } from "react";
import data from "../data";
import Services from "./Services";

export default function Servicehandler() {
  const [datas, setdatas] = useState();
  const Serving = data.map((datas) => (
    <Services key={datas.id} service={datas} />
  ));

  const onclickhandler = () => {
    setdatas(;
  };

  return (
    <div>
      <button onClick={onclickhandler}> {datas}</button>
      {Serving}
      {datas}
    </div>
  );
}
