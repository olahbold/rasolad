import React from 'react'
import "./All.css";

export default function Projects() {
    return (
        <div className = 'Project_container' >


    <div className = 'projects_heading'>
      
    <img src="image4.jpg" alt="Forest"  style = {{position :"relative"}} />
      <h2 >PROJECTS</h2></div>
      </div>      

<div className="Project_gallery">
  <a target="_blank" href="image4.jpg">
    <img src="image4.jpg" alt="Forest" width="400" height="300/>
  </a>
  
</div>

<div className="Project_gallery">
  <a target="_blank" href="image5.jpg >
    <img src="image5.jpg" alt="Northern Lights" width="400" height="300/>
  </a>
  
</div>

<div className="Project_gallery">
  <a target="_blank" href="image6.jpg">
    <img src="image6.jpg" alt="Mountains"width="400" height="300 />
  </a>
  
</div>


     <div className="Project_gallery">
  <a target="_blank" href="image7.jpg">
    <img src="image7.jpg" alt="Cinque Terre" width="400" height="300 />
  </a>
</div>

</div>
    )
}
