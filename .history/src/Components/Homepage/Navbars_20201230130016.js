import React from "react";
import { Navbar, Nav, Nav,Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./home.css";

export default function Navbars() {
  return (
    <div>
      <Container>
      <Navbar
        collapseOnSelect
        expand="lg"
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
            <Nav componentClass={Link} href="/about" >
              About
            </Nav>
            <Nav componentClass={Link} href="/Project" >
              Projects
            </Nav>

            <Nav componentClass={Link} href="/Services" >
              Services
            </Nav>

            <Nav  componentClass={Link} href="/contact" >
              Contact
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </Container>
    </div>
  );
}
