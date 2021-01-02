import React from "react";
import "./home.css";

export default function Homes() {
  return (
    <div className="Homepage_services">
      <div className="gallery">
        <a href="/services">
          <img
            src="image4.jpg"
            alt="Forest"
            
            
            className="galleryImage"
          />
        </a>

        <div className="overlay">
          {" "}
          <div className="desc">Consultancy</div>
        </div>
      </div>

      <div className="gallery">
        <a target="_blank" href="/services">
          <img
            src="image5.jpg"
            alt="Northern Lights"
           
           
            className="galleryImage"
          />
        </a>
        <div className="overlay">
          {" "}
          <div className="desc">Installation</div>
        </div>
      </div>

      <div className="gallery">
        <a target="_blank" href="/services">
          <img
            src="image6.jpg"
            alt="Mountains"
            
            
            className="galleryImage"
          />
        </a>

        <div className="overlay">
          {" "}
          <div className="desc">Manufacturing</div>
        </div>
      </div>

      <div className="gallery">
        <a target="_blank" href="/services">
          <img
            src="image7.jpg"
            alt="Cinque Terre"
          
          
            className="galleryImage"
          />
        </a>

        <div className="overlay">
          {" "}
          <div className="desc">SALES</div>
        </div>
      </div>
    </div>
  );
}
