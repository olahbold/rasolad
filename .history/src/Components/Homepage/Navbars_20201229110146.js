import React from "react";
import { Navbar, Nav, NavLink} from "react-bootstrap";
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
        fixed="top"
      >
        <Navbar.Brand variant="text-warning" href="/" to="/">
          <img src = 'razolad_logo'/>
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

            <NavLink componentClass={Link} href="/Services" >
              Services
            </NavLink>

            <NavLink  componentClass={Link} href="/contact" >
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
