import React from "react";
import { Navbar, Nav,NavLink} from "react-bootstrap";
import { Link } from 'react-router-dom'
import './All.css'

export default function Navbars() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg ='light' variant = 'text-info' className = 'sticky' >
        <Navbar.Brand variant = 'text-warning' href="#home">RASOLAD ENGINERRING SERVICES</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav  variant = 'pills' className="justify-content-center">
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
