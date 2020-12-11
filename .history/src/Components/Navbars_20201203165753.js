import React from "react";
import { Navbar, Nav,NavLink} from "react-bootstrap";
import { Link } from 'react-router-dom'


export default function Navbars() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="danger">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav  variant = 'pill' className="justify-content-center">
            <NavLink componentClass={Link} href="/" to="/">
              Home
            </NavLink>
            <NavLink componentClass={Link} href="/about" to="/about">
              About
            </NavLink>
            <NavLink componentClass={Link} href="/Project" to="/Project">
              Projects
            </NavLink>
            <NavLink componentClass={Link} href="/Services" to="/Services">
              Services
            </NavLink>
            <NavLink componentClass={Link} href="/contact" to="/contact">
              Contact
            </NavLink>
           </Nav>
        </Navbar.Collapse>
      </Navbar>
       </div>
  );
}
