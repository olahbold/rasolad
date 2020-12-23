import React from "react";
import './project.css'
export default function projectGallery() {
  return (
    <div className="ProjectGalleryContainer">
      <div>
        <h2>CBN PROJECT</h2>
        <div className = 'imageWrappper'>
          <img src="image4.jpg" alt="" className = 'imageItem' />

          <img src="image5.jpg" alt=""   className = 'imageItem'/>

          <img src="image6.jpg" alt=""  className = 'imageItem' />
        </div>
      </div>

      <div>
        <h2>CBN PROJECT</h2>
        <div >
          <img src="image4.jpg" alt=""   className = 'imageItem'/>
          <img src="image5.jpg" alt=""   className = 'imageItem'/>
          <img src="image6.jpg" alt=""   className = 'imageItem' />
        </div>
      </div>

      <div>
        <h2>CBN PROJECT</h2>
        <div>
          <img src="image4.jpg" alt=""   className = 'imageItem'/>
          <img src="image5.jpg" alt=""   className = 'imageItem'/>
          <img src="image6.jpg" alt=""   className = 'imageItem'/>
        </div>
      </div>

      <div>
        <h2>CBN PROJECT</h2>
        <div>
          <img src="image4.jpg" alt=""  className = 'imageItem'/>
          <img src="image5.jpg" alt=""   className = 'imageItem'/>
          <img src="image6.jpg" alt=""  className = 'imageItem'/>
        </div>
      </div>
    </div>
  );
}
