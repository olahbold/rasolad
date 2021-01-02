import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Na } from "react-router-dom";
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
            <Na to="/">Home</Na>
            <Na to="/about">About</Na>
            <Na to="/Project">Projects</Na>
            <NavDropdown title="Services" id="collasible-nav-dropdown">
              {data.map((item) => {
                return (
                  <NavDropdown.Item
                    key={item.id}
                    componentClass={Na}
                    to={item.url}
                  >
                    {item.title}
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>

            <Na to="/contact">Contact</Na>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
