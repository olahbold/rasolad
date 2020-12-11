import React from "react";
import { Navbar, Nav, NavDropdown,NavLink} from "react-bootstrap";
import { Link } from 'react-router-dom'


export default function Navbars() {
  return (
    <dniv>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="danger">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-center">
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
       </div>
  );
}