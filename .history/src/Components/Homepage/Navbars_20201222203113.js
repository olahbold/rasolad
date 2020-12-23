import React from "react";
import { Navbar, Nav, NavLink,NavDropdown } from "react-bootstrap";
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
            <NavLink componentClass={Link} href="/" to="/">
              Home
            </NavLink>
            <NavLink componentClass={Link} href="/about" to="/about">
              About
            </NavLink>
            <NavLink componentClass={Link} href="/Project" to="/Project">
              Projects
            </NavLink>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Fabrication</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Installation
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Saless</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <NavLink componentClass={Link} href="/contact" to="/contact">
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
