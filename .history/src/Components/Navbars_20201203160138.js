import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
export default function Navbars() {
  return (
    <div>
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
            <NavLink componentClass={Link} href="/Projects" to="/give">
              Projects
            </NavLink>
            <NavLink componentClass={Link} href="/Servi" to="/connect">
              Services
            </NavLink>
            <NavLink componentClass={Link} href="/contact" to="/contactus">
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

      <Nav>
        <NavLink componentClass={Link} href="/" to="/">
          Home
        </NavLink>
        <NavLink componentClass={Link} href="/about" to="/about">
          About
        </NavLink>
        <NavLink componentClass={Link} href="/give" to="/give">
          Give
        </NavLink>
        <NavLink componentClass={Link} href="/connect" to="/connect">
          Connect
        </NavLink>
        <NavLink componentClass={Link} href="/contact" to="/contactus">
          Contact Us
        </NavLink>
      </Nav>

      <button>click me</button>
    </div>
  );
}
