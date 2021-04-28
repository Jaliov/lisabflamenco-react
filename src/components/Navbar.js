import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
    return (
<>
<Navbar variant="dark" className = "navv">
    <Navbar.Brand href='/' >Lisa Botalico Flamenco!</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href='/'>Home</Nav.Link>
      <Nav.Link href='/gallery'>Gallery</Nav.Link>
      <Nav.Link href='/gallery2'>Gallery2</Nav.Link>
      <Nav.Link href='/choreography'>Choreography</Nav.Link>
      <Nav.Link href='/bio'>About</Nav.Link>
      <Nav.Link href='/press'>Press</Nav.Link>
      <Nav.Link href='/events'>Events</Nav.Link>
    </Nav>
   
  </Navbar>
 
</>)
}

export default NavBar;