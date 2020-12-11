import React from "react";
import  {Carousel} from 'antd'

export default function header() {
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    
    
        <div>
          <Carousel autoplay effect="fade">

            <div className>
              <img src="constrution_work.jpg"  className = 'Image_settings' alt = "logo"/>
            </div>
            <div>
            <img src="constrution_work.jpg" className = 'Image_settings'  alt = "logo"/>
              
            </div>
            <div>
            <img src="constrution_work.jpg"  alt = "logo"/>
          
            </div>
            <div>
            <img src="constrution_work.jpg"  alt = "logo"/>
              
            </div>
          </Carousel>
        </div>
    
  
  );
}
