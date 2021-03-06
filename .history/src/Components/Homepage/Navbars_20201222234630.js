import React from "react";
import { Navbar, Nav, NavLink, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./home.css";

export default function Navbars() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="text-info"
        className="fixed"
      >
        <Navbar.Brand variant="text-warning" href="/" to="/">
          RASOLAD ENGINERRING SERVICES
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav variant="pills" className="justify-content-center">
            <NavLink componentClass={Link} href="/" >
              Home
            </NavLink>
            <NavLink componentClass={Link} href="/about" >
              About
            </NavLink>
            <NavLink componentClass={Link} href="/Project" >
              Projects
            </NavLink>

            <NavLink componentClass={Link} href="/Services" to="/Services">
              Services
            </NavLink>

            <NavLink  componentClass={Link} href="/contact" to="/contact">
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
