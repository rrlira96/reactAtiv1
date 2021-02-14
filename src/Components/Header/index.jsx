import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const Header = ({ title, rotas }) => (

  <>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">{title}</Navbar.Brand>
      <Nav className="mr-auto">
        {rotas.map((rota) => <Nav.Link href="#">{rota}</Nav.Link>)}
      </Nav>
    </Navbar>
    <br />
  </>

);

export default Header;
