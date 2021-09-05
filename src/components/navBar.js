import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand>PROPIUSS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/home">HOME</Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/package">PACKAGE</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about">ABOUT US</Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/contact">CONTACT</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
