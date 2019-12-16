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

class Clientes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: "",
      cpf: ""
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
              <Jumbotron className="mt-3 mt-md-5">
                <Container>
                  <Row>
                    <Col md="5">
                      <h3>Lista de Clientes</h3>
                      <Form onSubmit={this.handleSearch}>
                        <FormGroup>
                          <Label for="campoPesquisarCliente">Pesquisar</Label>
                          <Input
                            type="name"
                            name="nome"
                            id="campoPesquisarCliente"
                            value={this.state.nome}
                            onChange={this.handleInputChange}
                            placeholder="Digite o nome ou cpf do paciente"
                          />
                        </FormGroup>
                      </Form>
                      <Table bordered hover responsive>
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Sobrenome</th>
                            <th>Ações</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                    <Col xs="12" md="7">
                      <Card className="mt-md-2 mx-md-5">
                        <CardBody>
                          <h3>Lais Castilho</h3>
                          <p className="text-muted">
                            Data de cadastro: 15/12/2019
                          </p>
                          <dl className="row">
                            <dt className="col-sm-3">Consultas até o momento</dt>
                            <dd className="col-sm-9">5</dd>

                            <dt className="col-sm-3">Faltas</dt>
                            <dd className="col-sm-9">
                              <p>1</p>
                            </dd>

                            <dt className="col-sm-3">Valor total</dt>
                            <dd className="col-sm-9">1350</dd>

                            <dt className="col-sm-3">Ações</dt>
                            <dd className="col-sm-9">
                                <Button color="primary" type="button">
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                </Button>
                            </dd>
                          </dl>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Clientes;
