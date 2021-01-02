import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Nav } from "react-router-dom";
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
            <Nav to="/">Home</Nav>
            <Nav to="/about">About</Nav>
            <Nav to="/Project">Projects</Nav>
            <NavDropdown title="Services" id="collasible-nav-dropdown">
              {data.map((item) => {
                return (
                  <NavDropdown.Item
                    key={item.id}
                    componentClass={Nav}
                    to={item.url}
                  >
                    {item.title}
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>

            <Nav to="/contact">Contact</Nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
