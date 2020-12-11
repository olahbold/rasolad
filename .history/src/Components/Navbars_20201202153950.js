import React from "react";
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
export default function Navbars() {

  const data = [
      {
      id : 1 ,
      title : 'LICENSED ELECTRICAL CONTRACTOR',
      content : 'Our company is licensed by NIGERIA electricity Management Service Agency to undertake electrical installations which covers both domestic and industrial installations'
      
      },
      
      {
      id : 2,
      title :'ENGINEERING CONSULTANT',
      content : 'Our company is certified by council for Regulation Of Engineering In Nigeria (COREN)to execute and coordinate engineering services consultancy in Nigeria in the field of electrical,mechanical,civil and infor'
      
      },
      
      {
      id : 3,
      title : 'MANUFACTURING OF CONCRETE POLES',
      content :'We have a precast yard where manufacturing of low voltage and high voltage of concrete poles are being produced for our project as well as our customers demand at all times'
      
      }
      
      ]
      
      const retriever = (data)=> data.map( dat => (console.log (dat)))
        
        console.log(dat)
                  
  
  
  
  
  
  return (
    <div>
      
        
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="danger">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className = 'justify-content-center'>
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <NavDropdown title="Services" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    



      <button>click me</button>
    </div>
  );
}






