import React from "react";
import "./All.css";
import { Carousel } from 'antd';

export default function Projects() {
  function onChange(a, b, c) {
    console.log(a, b, c);
  }
  
  return (<div>
    
   <Carousel afterChange={onChange} >
        <div>
          <h3 class>1</h3>
        </div>
        <div>
          <h3 class>2</h3>
        </div>
        <div>
          <h3 class>3</h3>
        </div>
        <div>
          <h3 class>4</h3>
        </div>
      </Carousel>
      </div>
);
}







