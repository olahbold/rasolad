import React from "react";
import data from "../data";
import Services from "./Services";

export default function Servicehandler() {
  const datas = data.map((item) => {
    <div>
        c
      {" "}
      <Services item={item} />
    </div>;
  });
  return <div>{console.log(datas)}</div>;
}
