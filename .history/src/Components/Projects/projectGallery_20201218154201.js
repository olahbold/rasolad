import React, { Component } from "react";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "image3.jpg",
    thumbnail: "image3.jpg",
  },
  {
    original: "image6.jpg",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];
export default class projectGallery extends Component {
  render() {
    return (
      <div>
        <ImageGallery items={images} />;
      </div>
    );
  }
}
