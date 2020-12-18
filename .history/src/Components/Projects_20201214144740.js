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
          <h3 className = 'co'>1</h3>
        </div>
        <div>
          <h3 className = 'co'>2</h3>
        </div>
        <div>
          <h3 className = 'co'>3</h3>
        </div>
        <div>
          <h3 className = 'co'>4</h3>
        </div>
      </Carousel>
      </div>
);
}







