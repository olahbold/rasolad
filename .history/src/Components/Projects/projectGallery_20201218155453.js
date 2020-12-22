import React, { Component } from "react";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "image3.jpg",
    thumbnail: "image3.jpg",
  },
  {
    original: "image6.jpg",
    thumbnail: "image6.jpg",
  },
  {
    original: "image5.jpg",
    thumbnail: "image5.jpg",
  },
];
export default function projectGallery  {
  
    return (
      <div>
        <ImageGallery items={images} />;
      </div>
    );
  }
}
