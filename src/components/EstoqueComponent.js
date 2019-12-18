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

class Estoque extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col md="3" xs="12">
              <Jumbotron className="mt-3 mt-md-5">
                <Container fluid>
                  <Row>
                    <Col md="12" xs="12">
                      <Button color="info" size="lg">Fornecedores</Button>
                    </Col>

                  </Row>
                  <Row className="mt-md-3">
                    <Col md="12" xs="12">
                      <p className="lead">Itens que acabarão</p>
                    </Col>
                  </Row>
                  <Row className="mt-md-3">
                    <Col md="12" xs="12">
                      <p className="lead">Itens em falta</p>
                    </Col>
                  </Row>
                </Container>
              </Jumbotron>
            </Col>
            <Col md="9" xs="12">
              <Jumbotron className="mt-3 mt-md-5">

                <Container fluid>
                  <Row>
                    <Col md="6" xs="12">
                      <h3>Estoque</h3>
                      <Form onSubmit={this.handleSearch}>
                        <FormGroup>
                          <Label for="campoPesquisarCliente">Pesquisar</Label>
                          <Input
                            type="name"
                            name="nome"
                            id="campoPesquisarCliente"
                            value={this.state.nome}
                            onChange={this.handleInputChange}
                            placeholder="Digite o nome do item"
                          />
                        </FormGroup>
                      </Form>
                      <Table bordered hover responsive>
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Qtd</th>
                            <th>Ações</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Seringa Tríplice</td>
                            <td>10</td>
                            <td className="text-center">
                              <Button
                                size="sm"
                                color="primary"
                                type="button"
                              >
                                <i
                                  className="fa fa-search"
                                  aria-hidden="true"
                                ></i>
                              </Button>
                              <Button
                                size="sm"
                                className="ml-md-1"
                                color="warning"
                                type="button"
                              >
                                <i
                                  className="fa fa-pencil"
                                  aria-hidden="true"
                                ></i>
                              </Button>
                              <Button
                                size="sm"
                                className="ml-md-1"
                                color="danger"
                                type="button"
                              >
                                <i
                                  className="fa fa-times"
                                  aria-hidden="true"
                                ></i>
                              </Button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Gase</td>
                            <td>5</td>
                            <td className="text-center">
                              <Button
                                size="sm"
                                color="primary"
                                type="button"
                              >
                                <i
                                  className="fa fa-search"
                                  aria-hidden="true"
                                ></i>
                              </Button>
                              <Button
                                size="sm"
                                className="ml-md-1"
                                color="warning"
                                type="button"
                              >
                                <i
                                  className="fa fa-pencil"
                                  aria-hidden="true"
                                ></i>
                              </Button>
                              <Button
                                size="sm"
                                className="ml-md-1"
                                color="danger"
                                type="button"
                              >
                                <i
                                  className="fa fa-times"
                                  aria-hidden="true"
                                ></i>
                              </Button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Algodão</td>
                            <td>30</td>
                            <td className="text-center">
                              <Button
                                size="sm"
                                color="primary"
                                type="button"
                              >
                                <i
                                  className="fa fa-search"
                                  aria-hidden="true"
                                ></i>
                              </Button>
                              <Button
                                size="sm"
                                className="ml-md-1"
                                color="warning"
                                type="button"
                              >
                                <i
                                  className="fa fa-pencil"
                                  aria-hidden="true"
                                ></i>
                              </Button>
                              <Button
                                size="sm"
                                className="ml-md-1"
                                color="danger"
                                type="button"
                              >
                                <i
                                  className="fa fa-times"
                                  aria-hidden="true"
                                ></i>
                              </Button>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
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

export default Estoque;
