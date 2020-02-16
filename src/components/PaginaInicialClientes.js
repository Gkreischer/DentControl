import React, { Component } from 'react';

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

import { Link } from 'react-router-dom';

class PaginaInicialClientes extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
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
                                <div className="text-right">
                                    <Link to="/clientes/addCliente">
                                        <Button color="primary"><span className="fa fa-plus"></span></Button>
                                    </Link>
                                </div>
                            </Col>
                            <Col xs="12" md="7">
                                <Card className="mt-md-2 mx-md-5">
                                    <CardBody>
                                        <Container fluid>
                                            <Row>
                                                <Col xs="12" md="6">
                                                    <img
                                                        className="img-fluid"
                                                        src={require("./../shared/images/user.jpg")}
                                                        alt="Imagem do usuario"
                                                    />
                                                </Col>
                                                <Col xs="12" md="6">
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

                                                        <dt className="col-sm-6">Valor total</dt>
                                                        <dd className="col-sm-6">1350</dd>

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
                    </Container>
                </Jumbotron>
            </React.Fragment>
        );
    }
}

export default PaginaInicialClientes;