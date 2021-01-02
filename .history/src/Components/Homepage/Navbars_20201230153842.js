import React from "react";
import { Navbar, Nav, Container, NavDropdown} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./home.css";
import data from '../data'

export default function Navbars() {
  return ( <div>
    <Container>
    <Navbar
      collapseOnSelect
      expand="true"
      bg="light"
      variant="light"
      
    >
      <Navbar.Brand variant="text-warning" href="/" to="/">
        <img src = 'razolad_logo.jpeg' alt = '' width = '200px'/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav  className="mr-auto">
          <Nav.Link componentClass={Link} href="/" >
            Home
          </Nav.Link>
          <Nav.Link componentClass={Link} href="/about" >
            About
          </Nav.Link>
          <Nav.Link componentClass={Link} href="/Project" >
            Projects
          </Nav.Link>
          <NavDropdown title="Services" id="collasible-nav-dropdown">
          {
              data.map(() => {
                return(


                )

              })

        
       
     }
      </NavDropdown>
          
          
          <Nav.Link  componentClass={Link} href="/contact" >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </Container>
  </div>
    );
  



























  }
