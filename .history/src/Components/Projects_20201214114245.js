import React from 'react'

import "./All.css";

export default function Projects() {
    return (
        <div className = 'Project_container'>


    <div>
      <imgm/>
      
      
      </div>      

<div className="gallery">
  <a target="_blank" href="image4.jpg">
    <img src="image4.jpg" alt="Forest" width="400" height="300"/>
  </a>
  <div className="desc">FABRICATION</div>
</div>

<div className="gallery">
  <a target="_blank" href="image5.jpg">
    <img src="image5.jpg" alt="Northern Lights" width="400" height="300"/>
  </a>
  <div className="desc">SOLAR MINI-GRID</div>
</div>

<div className="gallery">
  <a target="_blank" href="image6.jpg">
    <img src="image6.jpg" alt="Mountains" width="400" height="300"/>
  </a>
  <div className="desc">SALES</div>
</div>


     <div className="gallery">
  <a target="_blank" href="image7.jpg">
    <img src="image7.jpg" alt="Cinque Terre" width="400" height="300"/>
  </a>



        </div>
    )
}
