import React, { Component } from 'react'




const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];
export default class projectGallery extends Component {
    render() {
        return (
            <div>
                import ImageGallery from 'react-image-gallery';
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  
 class MyGallery extends React.Component {
   render() {
     return <ImageGallery items={images} />;
   }
 }
            </div>
        )
    }
}
