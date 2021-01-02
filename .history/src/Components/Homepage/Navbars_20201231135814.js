import React from "react";
import { Navbar, Nav, NavDropdown} from "react-bootstrap";
import { Link} from "react-router-dom";
import "./home.css";
import data from "../data";

export default function Navbars() {
  return (
    <div>
      <Navbar collapseOnSelect expand="true" bg="light" variant="light">
        <Navbar.Brand variant="text-warning"  href="/">
          <img src="razolad_logo.jpeg" alt="" width="200px" />
        </Navbar.Brand>
        <Navbar.hrefggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auhref">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/Project">Projects</Nav.Link>
            <NavDropdown title="Services" id="collasible-nav-dropdown">
              {data.map((item) => {
                return (
                  <NavDropdown.Item
                    key={item.id}
                    componentClass={Link}
                    href = {item.url}
                    
                  >
                    {item.title}
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>

            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
