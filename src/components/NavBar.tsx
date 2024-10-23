import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>Calriz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Empresas
            </Nav.Link>
            <Nav.Link as={Link} to="/funcionarios">
              Funcionários
            </Nav.Link>
            <Nav.Link as={Link} to="/calculadora">
              Calculadora
            </Nav.Link>
            <Nav.Link as={Link} to="/funcionarios/1">
              Encontrar Funcionários
            </Nav.Link>
            <Nav.Link as={Link} to="/calculadora/1">
              Encontrar Cálculo de Cotas da Empresa
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
