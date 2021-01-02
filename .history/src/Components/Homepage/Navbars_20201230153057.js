import React from "react";
import { Navbar, Nav, Container, NavDropdown} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./home.css";

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
          <NavDropdown title="Services" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">SALES</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Manufacturing</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
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
