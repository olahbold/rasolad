import React from "react";
import "./All.css";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,
  MDBIcon,
  MDBBtn,
} from "mdbreact";

export default function Footer() {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol>
            <h5 className="title">HEADQUATER</h5>
            <p>
            59,Oke-Itoku road, Ago-oko, Abeokuta
ogun state
            </p>
          </MDBCol>

          <MDBCol>
            <h5 className="title">HEADQUATER</h5>
            <p>
              
              
            </p>
          </MDBCol>

          <MDBCol>
            <h5 className="title">HEADQUATER</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>

          <MDBCol>
            <h5 className="title">HEADQUATER</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">QUICKLINKS</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">HOME</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">ABOUT</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">PROJECTS</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">CONTACT</a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol md="6">
            <h5 className="title">SOCIAL</h5>
            <MDBRow>
              <MDBCol>
                {" "}
                <MDBBtn social="fb">
                  <MDBIcon fab icon="facebook-f" className="pr-1" />
                  Facebook
                </MDBBtn>
              </MDBCol>

              <MDBCol>
                <MDBBtn floating social="tw" size="lg">
                  <MDBIcon fab icon="twitter" className="pr-1" />
                </MDBBtn>
              </MDBCol>
              <MDBCol>
                <MDBBtn social="ins">
                  <MDBIcon fab icon="instagram" className="pr-1" /> Instagram
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href=""> BOLDSOLVERS </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}
