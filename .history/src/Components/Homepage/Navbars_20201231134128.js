import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./home.css";
import data from "../data";

export default function Navbars() {
  return (
    <div>
    
        <Navbar collapseOnSelect expand="true" bg="light" variant="light">
          <Navbar.Brand variant="text-warning" href="/" to="/">
            <img src="razolad_logo.jpeg" alt="" width="200px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Link componentClass={Link} href="/">
                Home
              </>
              < componentClass={Link} href="/about">
                About
              </>
              < componentClass={Link} href="/Project">
                Projects
              </>
              <NavDropdown title="Services" id="collasible-nav-dropdown">
                {data.map((item) => {
                  return (
                    <NavDropdown.Item key={item.id}   componentClass = {Link} href={item.url}>
                      {item.title}
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>

              < componentClass={Link} href="/contact">
                Contact
              </>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      
    </div>
  );
}
