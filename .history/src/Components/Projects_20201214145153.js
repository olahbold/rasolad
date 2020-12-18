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
         
          <h3 className = 'contentStyle'>1</h3>
        </div>
        <div>
          <h3 className = 'contentStyle'>2</h3>
        </div>
        <div>
          <h3 className = 'contentStyle'>3</h3>
        </div>
        <div>
          <h3 className = 'contentStyle'>4</h3>
        </div>
      </Carousel>
      </div>
);
}







