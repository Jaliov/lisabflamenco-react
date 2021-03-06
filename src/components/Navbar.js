import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {  
    return (
<>
<Navbar variant="dark" expand="lg" className = "navv">
    <Navbar.Brand href='/' className='text-danger' id="navbarBrand"><img
        alt="flamenco"
        src="favicon.ico"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}Lisa Botalico Flamenco!</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto container">
      <Nav.Link href='/'>Home</Nav.Link>
      <Nav.Link href='/bio'>About</Nav.Link>
      <Nav.Link href='/gallery'>Gallery</Nav.Link>
      <Nav.Link href='/choreography'>Choreography / Collaborations</Nav.Link>
      <Nav.Link href='/notable'>Past Events</Nav.Link>
      <Nav.Link href='/videogallery'>Videos</Nav.Link>
      <Nav.Link href='/press'>Press</Nav.Link>
      <Nav.Link href='/classes'>Classes</Nav.Link>
      <Nav.Link href='/events'>Upcoming</Nav.Link>
    </Nav>
    </Navbar.Collapse>
  </Navbar>
 
</>)
}

export default NavBar;