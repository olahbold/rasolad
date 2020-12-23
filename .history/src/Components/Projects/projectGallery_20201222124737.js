import React from "react";
import './project.css'
export default function projectGallery() {
  return (
    <div className="ProjectGalleryContainer">
      <div className = 'galleryItem'>
        <h2 className = 'itemText'>CBN PROJECT</h2>
        <div className = 'imageWrappper'>
          <img src="image4.jpg" alt="" className = '' />

          <img src="image5.jpg" alt=""   className = ''/>

          <img src="image6.jpg" alt=""  className = '' />
        </div>
      </div>

      <div className = 'galleryItem'>
        <h2 className = 'itemText'>CBN PROJECT</h2>
        <div className = 'imageWrappper'>
          <img src="image4.jpg" alt=""   className = ''/>
          <img src="image5.jpg" alt=""   className = ''/>
          <img src="image6.jpg" alt=""   className = '' />
        </div>
      </div>

      <div className = 'galleryItem'>
        <h2 className = 'itemText'>CBN PROJECT</h2>
        <div className = 'imageWrappper'>
          <img src="image4.jpg" alt=""   className = ''/>
          <img src="image5.jpg" alt=""   className = ''/>
          <img src="image6.jpg" alt=""   className = ''/>
        </div>
      </div>

      <div className = 'galleryItem'>
        <h2 className = 'itemText'>CBN PROJECT</h2>
        <div  className = 'imageWrappper'>
          <img src="image4.jpg" alt=""  className = ''/>
          <img src="image5.jpg" alt=""   className = ''/>
          <img src="image6.jpg" alt=""  className = ''/>
        </div>
      </div>
    </div>
  );
}
