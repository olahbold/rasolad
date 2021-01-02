import React from "react";
import "./home.css";

export default function Homes() {
  return (
    <div className="Homepage_services">
      <div className="gallery">
        <a href="/services">
          <img src="image4.jpg" alt="Forest" width="400" height="300" />
        </a>

        <div className="overlay">
          {" "}
          <div className="desc">SALES</div>
        </div>
      </div>

      <div className="gallery">
        <a target="_blank">
          <img
            src="image5.jpg"
            alt="Northern Lights"
            width="400"
            height="300"
            className="image"
          />
        </a>
        <div className="overlay">
          {" "}
          <div className="desc">SALES</div>
        </div>
      </div>

      <div className="gallery">
        <a target="_blank">
          <img src="image6.jpg" alt="Mountains" width="400" height="300" />
        </a>

        <div className="overlay">
          {" "}
          <div className="desc">SALES</div>
        </div>
      </div>

      <div className="gallery">
        <a target="_blank">
          <img src="image7.jpg" alt="Cinque Terre" width="400" height="300" />
        </a>

        <div className="overlay">
          {" "}
          <div className="desc">SALES</div>
        </div>
      </div>
    </div>
  );
}
