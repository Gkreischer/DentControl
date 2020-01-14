import React, { Component } from 'react';
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
    CardBody
} from "reactstrap";

class Agendamentos extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row className="mt-md-5">
                        <Col md="12" xs="12">
                            <Jumbotron>
                                <Container fluid>
                                <h3>Agendamentos</h3>
                                    <Row>
                                        <Col xs={12} md={4}>
                                            Ações
                                        </Col>
                                        <Col xs={12} md={8}>
                                            Lista de consultas por proximidade de horário
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

export default Agendamentos;