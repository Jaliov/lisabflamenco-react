import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavBar = () => {
  return (
    <>
      <Navbar variant="dark" expand="lg" className="navv">
        <Navbar.Brand href="/" id="navbarBrand">
          <img
            alt="flamenco"
            src="favicon.ico"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto container hamburger">
            <Nav.Link href="/" className="btnTransform">
              Home
            </Nav.Link>
            <Nav.Link href="/bio" className="btnTransform">
              About
            </Nav.Link>
            <Nav.Link href="/gallery" className="btnTransform">
              Gallery
            </Nav.Link>
            <Nav.Link href="/choreography" className="btnTransform">
              Choreography / Collaborations
            </Nav.Link>
            <Nav.Link href="/notable" className="btnTransform">
              Notable Events
            </Nav.Link>
            <Nav.Link href="/videogallery" className="btnTransform">
              Videos
            </Nav.Link>
            <Nav.Link href="/press" className="btnTransform">
              Press
            </Nav.Link>
            <Nav.Link href="/classes" className="btnTransform">
              Teaching
            </Nav.Link>
            <Nav.Link href="/events" className="btnTransform">
              Events
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
