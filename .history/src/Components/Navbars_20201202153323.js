import React from "react";
import {Navbar,Nav,NavDropdown} from "react-bootstrap";
import data from './data'
export default function Navbars() {

  const retriever = (data)=> {
  
    data.map( dat => (console.log (da
    }
    
    
    
    console.log(dat)
  
  
    <button>click me</button>
      </div>
    );
  }
  
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
    










