import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CustomNavbar() {
  return (
    <Navbar expand="md" bg="light" variant="light" className="padding-2">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="61" height="32" viewBox="0 0 61 32" fill="none">
            <path fillRule="evenodd" clipRule="evenodd"
              d="M31.3469 26.1224L15.6735 0L0 26.1224H31.3469ZM60.0816 5.87755L44.4082 32L28.7347 5.87755H60.0816Z"
              fill="#33323D" />
          </svg>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="w-100 align-items-end justify-content-end">
            <Nav.Item>
              <Nav.Link as={Link} to="/" className="nav-link active">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/portfolio" className="nav-link">Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/contact" className="nav-link">Contact Me</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;