import React, {u} from "react";
import data from "../data";
import Services from "./Services";

export default function Servicehandler() {
  const [datas, setdatas] = useState("");
  const Serving = data.map((datas) => (
    <Services key={datas.id} title={datas.title} content={datas.content} />
  ));

  const onclickhandler = () => {
    setdatas(console.log("i am clicked"));
  };

  return (
    <div>
      <button onClick={onclickhandler}> Goal</button>
      {Serving}
      {datas}
    </div>
  );
}
