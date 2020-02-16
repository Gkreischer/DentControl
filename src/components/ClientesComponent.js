import React, { Component } from "react";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Table,
  Form,
  FormGroup,
  Label,
  Button,
  Input,
  Card,
  CardBody
} from "reactstrap";
import { Link, Switch } from 'react-router-dom';
import AddClienteWithRouter from './AddClientesComponent';
import PaginaInicialClientes from './PaginaInicialClientes';
import { AuthRoute } from 'react-router-auth';
class Clientes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: "",
      cpf: "",
      isLogged: true
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSearch(event) {
    event.preventDefault();

    console.log(JSON.stringfy(this.state));
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col>
              <Switch>
                <AuthRoute path="/clientes/addCliente" component={AddClienteWithRouter} redirectTo="/login" authenticated={this.state.isLogged} />
                <AuthRoute path="/clientes" component={PaginaInicialClientes} redirectTo="/login" authenticated={this.state.isLogged} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Clientes;
