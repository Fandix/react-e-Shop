import { Container, Nav, Navbar } from 'react-bootstrap';
import './HeaderComponent.scss';

function HeaderComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary context">
      <Container>
        <Navbar.Brand href="/">E Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='collapse'>
          <Nav className="me-auto">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderComponent;
