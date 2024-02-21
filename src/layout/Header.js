import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">PORTFOLIO</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="ml-auto justify-content-end"
              activeKey={location.pathname}
              style={{ width: '100%' }}
            >
              <Nav.Link href="/">HOME</Nav.Link>
              <Nav.Link href="/counter">COUNTER</Nav.Link>
              <Nav.Link href="/axois">API</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
