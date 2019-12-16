import React, { Component } from 'react';

import { Container, Row, Col, Jumbotron, Card, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    };

    render() {

        const date = new Date().toLocaleDateString();
        const name = 'Gustavo Kreischer de Almeida'

        return (
            <React.Fragment>
                <Container>
                    <Row className="mt-3 mt-md-5">
                        <Col md="12">
                            <Jumbotron>
                                <h3>Bem-vindo, {name} </h3>
                                <p className="text-muted">Data: {date}</p>
                                <hr className="my-md-5" />

                                <Row>
                                    <Col md="3" xs="12">
                                        <Card>
                                            <CardBody>
                                                <CardTitle><b>Pacientes Hoje</b></CardTitle>
                                                <ListGroup flush>
                                                    <ListGroupItem>Cras justo odio</ListGroupItem>
                                                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                                    <ListGroupItem>Morbi leo risus</ListGroupItem>
                                                    <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                                                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                                                </ListGroup>
                                                <p className="text-right mt-md-2">Ver mais ...</p>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col md="3" xs="12">
                                        <Card>
                                            <CardBody>
                                                <CardTitle><b>Avisos</b></CardTitle>
                                                <ListGroup flush>
                                                    <ListGroupItem>Cras justo odio</ListGroupItem>
                                                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                                    <ListGroupItem>Morbi leo risus</ListGroupItem>
                                                    <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                                                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                                                </ListGroup>
                                                <p className="text-right mt-md-2">Ver mais ...</p>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col md="6" xs="12">
                                        <iframe src="https://web.whatsapp.com/" width="500" height="350" allowfullscreen></iframe>
                                    </Col>
                                </Row>


                            </Jumbotron>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default Home;