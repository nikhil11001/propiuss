import React, { useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const collapseBtnRef = React.createRef();
  const basicNavRef = React.createRef();

  const hideMenu = () => {
    collapseBtnRef.current.classList.add("collapsed");
    basicNavRef.current.classList.remove("show");
  };

  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand>PROPIUSS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" ref={collapseBtnRef} />
        <Navbar.Collapse id="basic-navbar-nav" ref={basicNavRef}>
          <Nav className="me-auto">
            <Nav.Link onClick={hideMenu}>
              <Link to="/home">HOME</Link>
            </Nav.Link>

            <Nav.Link onClick={hideMenu}>
              <Link to="/package">PACKAGE</Link>
            </Nav.Link>
            <Nav.Link onClick={hideMenu}>
              <Link to="/about">ABOUT US</Link>
            </Nav.Link>

            <Nav.Link onClick={hideMenu}>
              <Link to="/contact">CONTACT</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
