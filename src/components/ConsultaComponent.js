import React, { Component } from "react";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Button,
  Input,
  Card,
  CardBody,
  Badge
} from "reactstrap";

class Consulta extends Component {
  constructor(props) {
    super(props);

    this.state = {
      paciente: "",
      ultimaConsulta: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log(JSON.strigfy(this.state));
  }

  render() {
    const dataAtual = new Date().toLocaleString();

    const ultimaConsulta = "03/12/2019";
    return (
      <React.Fragment>
        <Container>
          <Row className="mt-md-5">
            <Col md="12" xs="12">
              <Jumbotron>
                <h3>Consulta</h3>
                <Container fluid>
                  <Row>
                    <Col md="5" xs="12" style={{ paddingLeft: 0 }}>
                      <Form>
                        <FormGroup>
                          <Label for="paciente">Paciente</Label>
                          <Input
                            type="text"
                            name="paciente"
                            id="paciente"
                            value={this.state.paciente}
                            onChange={this.handleInputChange}
                          />
                        </FormGroup>
                      </Form>
                      <dl className="row">
                        <dt className="col-sm-4">Data e hora de início:</dt>
                        <dd className="col-sm-6">{dataAtual}</dd>
                      </dl>
                    </Col>
                    <Col xs="12" md="7">
                      <Card className="mt-md-2 mx-md-5">
                        <CardBody>
                          <Container fluid>
                            <Row>
                              <Col xs="12" md="5">
                                <img
                                  className="img-fluid"
                                  src={require("./../shared/images/user.jpg")}
                                  alt="Imagem do usuario"
                                />
                              </Col>
                              <Col xs="12" md="7">
                                <h3>Lais Castilho</h3>
                                <p className="text-muted">
                                  Data de cadastro: 15/12/2019
                                </p>
                                <dl className="row">
                                  <dt className="col-sm-6">
                                    Consultas até o momento
                                  </dt>
                                  <dd className="col-sm-6">5</dd>

                                  <dt className="col-sm-6">Faltas</dt>
                                  <dd className="col-sm-6">
                                    <p>1</p>
                                  </dd>

                                  <dt className="col-sm-4">Última consulta:</dt>
                                  <dd className="col-sm-8">
                                    <p>
                                      {ultimaConsulta}{" "}
                                      <Button className="btn-sm">
                                        <i className="fa fa-search"></i>
                                      </Button>
                                    </p>
                                  </dd>

                                  <dt className="col-sm-4">Ações</dt>
                                  <dd className="col-sm-8">
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
                                  </dd>
                                </dl>
                              </Col>
                            </Row>
                          </Container>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4" style={{ paddingLeft: 0 }}>
                      <Button color="primary" type="button">
                        Iniciar consulta
                      </Button>
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

export default Consulta;
