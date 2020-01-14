import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText
} from "reactstrap";
import { withRouter, Link } from "react-router-dom";

const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <React.Fragment>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/home">DentControl</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/home">
                <span className="fa fa-home fa-lg"></span> Home
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/clientes">
                <span className="fa fa-users fa-lg"></span> Clientes
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/controladorEstoque">
                <span className="fa fa-archive fa-lg"></span> Estoque
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/consulta">
                <span className="fa fa-medkit fa-lg"></span> Consulta
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/agendamentos">
                <span className="fa fa-calendar fa-lg"></span> Agendamentos 
              </Link>
            </NavItem>
          </Nav>
          <NavbarText>Contate-nos</NavbarText>
        </Collapse>
      </Navbar>
    </React.Fragment>
  );
};

export default withRouter(NavBar);
