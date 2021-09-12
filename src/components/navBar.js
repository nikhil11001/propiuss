import React, { useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const collapseBtnRef = React.createRef();
  const basicNavRef = React.createRef();

  const hideMenu = () => {
    console.log("In hide menu");
    collapseBtnRef.current.classList.add("collapsed");
    basicNavRef.current.classList.remove("show");
  };
  useEffect(() => {
    console.log("In use effect");
  });

  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand>SMART AUTOWARE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" ref={collapseBtnRef} />
        <Navbar.Collapse id="basic-navbar-nav" ref={basicNavRef}>
          <Nav className="me-auto">
            <Nav.Link onClick={hideMenu}>
              <Link to="/home">Home</Link>
            </Nav.Link>

            <Nav.Link onClick={hideMenu}>
              <Link to="/package">Package</Link>
            </Nav.Link>
            <Nav.Link onClick={hideMenu}>
              <Link to="/concept">Ideas</Link>
            </Nav.Link>
            <Nav.Link onClick={hideMenu}>
              <Link to="/about">About Us</Link>
            </Nav.Link>
            <Nav.Link onClick={hideMenu}>
              <Link to="/contact">Contact</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
