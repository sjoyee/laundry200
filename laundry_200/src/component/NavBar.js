import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container style={{display:'flex', flexDirection:"row"}}>
        <Navbar.Brand href="#main" style={{width:"40%"}}>Laundry 200%</Navbar.Brand>
        <Nav className="me-auto" style={{display:'flex',width:"60%", justifyContent:"flex-end"}}>
          <Nav.Link href="#main">Home</Nav.Link>
          <Nav.Link href="#login">Login</Nav.Link>
          <Nav.Link href="#weather">Laundry Day Recommendation</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;