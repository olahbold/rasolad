import React from "react";
import './project.css'
export default function projectGallery() {
  return (
    <div className="ProjectGalleryContainer">
      <div className = 'galleryItem'>
        <h2 className = 'itemText'>CBN PROJECT</h2>
        <div className = 'imageWrappper'>
          <img src="rasolad_images/cbn/cbn1.jpg" alt="" className = 'imageItemConfig' />

          <img src="rasolad_images/cbn/cbn2.jpg" alt=""   className = 'imageItemConfig'/>

          <img src="rasolad_images/cbn/cbn3.jpg" alt=""  className = 'imageItemConfig' />
        </div>
      </div>

      <div className = 'galleryItem'>
        <h2 className = 'itemText'>CBN PROJECT</h2>
        <div className = 'imageWrappper'>
          <img src="rasolad_images/Lightning_arrestor/lightning1.jpg" alt=""   className = 'imageItemConfig'/>
          <img src="rasolad_images/Lightning_arrestor/lightning1.jpg" alt=""   className = 'imageItemConfig'/>
          <img src="rasolad_images/Lightning_arrestor/lightning1.jpg" alt=""   className = 'imageItemConfig' />
        </div>
      </div>

      <div className = 'galleryItem'>
        <h2 className = 'itemText'>CBN PROJECT</h2>
        <div className = 'imageWrappper'>
          <img src="image4.jpg" alt=""   className = 'imageItemConfig'/>
          <img src="image5.jpg" alt=""   className = 'imageItemConfig'/>
          <img src="image6.jpg" alt=""   className = 'imageItemConfig'/>
        </div>
      </div>

      <div className = 'galleryItem'>
        <h2 className = 'itemText'>CBN PROJECT</h2>
        <div  className = 'imageWrappper'>
          <img src="image4.jpg" alt=""  className = 'imageItemConfig'/>
          <img src="image5.jpg" alt=""   className = 'imageItemConfig'/>
          <img src="image6.jpg" alt=""  className = 'imageItemConfig'/>
        </div>
      </div>
    </div>
  );
}
