import React, { Component } from 'react';
import { MDBLightbox, MDBContainer } from 'mdbreact';

class LightboxPage extends Component {
  state = {
    heading: [
      { src: 'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(63).jpg' },
      { src: 'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(66).jpg' },
      { src: 'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(65).jpg' },
      { src: 'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(67).jpg' },
      { src: 'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(68).jpg' },
      { src: 'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(64).jpg' },
      { src: 'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(69).jpg' },
      { src: 'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(59).jpg' },
      { src: 'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(70).jpg' }
    ]
  };

  render() {
    return (
      <MDBContainer>
        <h2 className='font-weight-bold my-5 text-center'>My Projects</h2>
        <MDBLightbox md='4' images={this.state.heading} noMargins />
      </MDBContainer>
    );
  }
}

export default LightboxPage;
























