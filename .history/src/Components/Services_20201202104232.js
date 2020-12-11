import React from 'react'
import { Carousel } from 'antd';

export default function Services(props) {
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
    
      };
      

    return (
        <div>
            <
           
<Carousel effect="fade">
    <div>
        <img src = 'logo192.png'/>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>




            
        </div>
    )
}
