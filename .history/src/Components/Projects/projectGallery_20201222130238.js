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
        <h2 className = 'itemText'>LIGHTNING ARRESTOR</h2>
        <div className = 'imageWrappper'>
          <img src="rasolad_images/Lightning_arrestor/lightning1.jpg" alt=""   className = 'imageItemConfig'/>
          <img src="rasolad_images/Lightning_arrestor/lightning2.jpg" alt=""   className = 'imageItemConfig'/>
          <img src="rasolad_images/Lightning_arrestor/lightning3.jpg" alt=""   className = 'imageItemConfig' />
        </div>
      </div>

      <div className = 'galleryItem'>
        <h2 className = 'itemText'>TRANSFORMER INSTALLATION</h2>
        <div className = 'imageWrappper'>
          <img src="rasolad_images/transformer_installation/installation1.jpg" alt=""   className = 'imageItemConfig'/>
          <img src="rasolad_images/transformer_installation/installation2.jpg" alt=""   className = 'imageItemConfig'/>
          <img src="rasolad_images/transformer_installation/installation3.jpg" alt=""   className = 'imageItemConfig'/>
        </div>
      </div>

      <div className = 'galleryItem'>
        <h2 className = 'itemText'>SOLAR INST</h2>
        <div  className = 'imageWrappper'>
          <img src="rasolad_images/Solar_installation/solar1.jpg" alt=""  className = 'imageItemConfig'/>
          <img src="rasolad_images/Solar_installation/solar2.jpg" alt=""   className = 'imageItemConfig'/>
          <img src="rasolad_images/Solar_installation/solar3.jpg" alt=""  className = 'imageItemConfig'/>
        </div>
      </div>
    </div>
  );
}
