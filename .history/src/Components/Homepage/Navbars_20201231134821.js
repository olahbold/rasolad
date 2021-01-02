import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { NavL } from "react-router-dom";
import "./home.css";
import data from "../data";

export default function Navbars() {
  return (
    <div>
      <Navbar collapseOnSelect expand="true" bg="light" variant="light">
        <Navbar.Brand variant="text-warning" to="/" to="/">
          <img src="razolad_logo.jpeg" alt="" width="200px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavL to="/">Home</NavL>
            <NavL to="/about">About</NavL>
            <NavL to="/Project">Projects</NavL>
            <NavDropdown title="Services" id="collasible-nav-dropdown">
              {data.map((item) => {
                return (
                  <NavDropdown.Item
                    key={item.id}
                    componentClass={NavL}
                    to={item.url}
                  >
                    {item.title}
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>

            <NavL to="/contact">Contact</NavL>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
